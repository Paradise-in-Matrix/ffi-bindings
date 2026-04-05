export default function ({ types: t }) {
    return {
        name: "uniffi-destructure-fix",
        visitor: {
            ImportDeclaration(path) {
                if (path.node.source.value === "uniffi-bindgen-react-native") {
                    const namedImports = path.node.specifiers.filter(spec => t.isImportSpecifier(spec));

                    if (namedImports.length > 0) {
                        const defaultImport = t.importDeclaration(
                            [t.importNamespaceSpecifier(t.identifier("uniffi"))],
                            t.stringLiteral("uniffi-bindgen-react-native")
                        );

                        const destructure = t.variableDeclaration("const", [
                            t.variableDeclarator(
                                t.objectPattern(namedImports.map(spec =>
                                    t.objectProperty(spec.imported, spec.local, false, spec.imported.name === spec.local.name)
                                )),
                                t.identifier("uniffi")
                            )
                        ]);

                        path.replaceWithMultiple([defaultImport, destructure]);
                    }
                }
            }
        }
    };
};
