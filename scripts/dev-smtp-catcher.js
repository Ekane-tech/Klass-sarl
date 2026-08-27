/**
 * Tiny dev-only SMTP catcher: accepts any mail on port 2525 and dumps the
 * raw message to /tmp/last-email.eml so we can inspect what the contact
 * form actually sends. NOT for production use.
 *
 * Usage: node scripts/dev-smtp-catcher.js
 */
const net = require("net");
const fs = require("fs");

const server = net.createServer((socket) => {
  let inData = false;
  let raw = "";
  socket.on("error", () => {});
  const origWrite = socket.write.bind(socket);
  socket.write = (s) => {
    try {
      if (!socket.destroyed && socket.writable) return origWrite(s);
    } catch {}
    return false;
  };
  socket.write("220 dev-catcher ESMTP\r\n");
  socket.on("data", (chunk) => {
    const text = chunk.toString("utf8");
    if (inData) {
      raw += text;
      if (raw.includes("\r\n.\r\n")) {
        inData = false;
        fs.writeFileSync("/tmp/last-email.eml", raw.split("\r\n.\r\n")[0]);
        console.log("Captured email ->", "/tmp/last-email.eml");
        socket.write("250 OK: queued\r\n");
      }
      return;
    }
    for (const line of text.split("\r\n")) {
      if (!line) continue;
      const cmd = line.toUpperCase();
      if (cmd.startsWith("EHLO") || cmd.startsWith("HELO")) {
        socket.write("250-dev-catcher\r\n250 AUTH LOGIN PLAIN\r\n");
      } else if (cmd.startsWith("AUTH")) {
        socket.write("235 ok\r\n");
      } else if (cmd.startsWith("MAIL") || cmd.startsWith("RCPT")) {
        socket.write("250 OK\r\n");
      } else if (cmd.startsWith("DATA")) {
        inData = true;
        raw = "";
        socket.write("354 go ahead\r\n");
      } else if (cmd.startsWith("QUIT")) {
        socket.write("221 bye\r\n");
        socket.end();
      } else {
        socket.write("250 OK\r\n");
      }
    }
  });
});

server.listen(2525, () => console.log("SMTP catcher on :2525"));
