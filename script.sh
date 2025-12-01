#!/bin/bash

# Output filename
OUTPUT="50mb_file.txt"

# Size in megabytes
SIZE_MB=50

# Use dd to create a file with repeated text pattern
dd if=/dev/zero bs=1M count=$SIZE_MB | tr '\0' 'A' > "$OUTPUT"

echo "Created $OUTPUT (≈ $SIZE_MB MB)"
