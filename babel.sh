#!/bin/bash

npx babel src/generated \
    --config-file ./babel.config.json \
    --out-dir src/generated-compat \
    --extensions ".js,.ts" \
    --ignore "**/*.d.ts" \
    --copy-files

cat <<EOF > src/generated-compat/wasm-bindgen/index_bg.js
// This provides the URL string that the Matrix SDK expects
export default "./generated-compat/wasm-bindgen/index_bg.wasm";
EOF

npx babel src/index.web.ts \
    --config-file ./babel.config.json \
    --out-file src/index.web.js

sed -i.bak 's/\.\/generated\//\.\/generated-compat\//g' src/index.web.js
