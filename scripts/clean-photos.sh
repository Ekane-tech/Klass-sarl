#!/bin/bash
# Light, non-destructive photo enhancement for workshop photos.
# Same pixels, same framing — only brightness / contrast / color / sharpness.
SRC="public/images/modif"
OUT="public/images/atelier"
mkdir -p "$OUT"

for f in "$SRC"/*; do
  base=$(basename "$f")
  name="${base%.*}"
  out="$OUT/$name.jpg"

  # measure luminance to adapt brightening
  mean=$(convert "$f" -auto-orient -resize 400x400 -colorspace gray -format "%[fx:mean]" info:)

  # adaptive gamma: darker photos get more lift
  gamma=$(awk -v m="$mean" 'BEGIN{
    if (m < 0.30) print 1.40;
    else if (m < 0.38) print 1.28;
    else if (m < 0.46) print 1.18;
    else if (m < 0.55) print 1.08;
    else print 1.00;
  }')

  convert "$f" \
    -auto-orient \
    -gamma "$gamma" \
    -sigmoidal-contrast 2.5x50% \
    -modulate 100,106,100 \
    -resize 1400x1400\> \
    -unsharp 0x1.0+0.5+0.02 \
    -strip -quality 82 \
    "$out"

  printf "%-32s mean=%.2f gamma=%s -> %s\n" "$base" "$mean" "$gamma" "$(du -h "$out" | cut -f1)"
done
