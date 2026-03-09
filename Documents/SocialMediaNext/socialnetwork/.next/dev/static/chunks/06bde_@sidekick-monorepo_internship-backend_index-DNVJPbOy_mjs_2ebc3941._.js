(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/SocialMediaNext/socialnetwork/node_modules/@sidekick-monorepo/internship-backend/index-DNVJPbOy.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreakingChangeType",
    ()=>d,
    "DangerousChangeType",
    ()=>h,
    "NoDeprecatedCustomRule",
    ()=>Wn,
    "NoSchemaIntrospectionCustomRule",
    ()=>zn,
    "assertValidName",
    ()=>ot,
    "buildClientSchema",
    ()=>et,
    "concatAST",
    ()=>rt,
    "createSourceEventStream",
    ()=>hn,
    "findBreakingChanges",
    ()=>ut,
    "findDangerousChanges",
    ()=>ct,
    "getIntrospectionQuery",
    ()=>gn,
    "getOperationAST",
    ()=>Jn,
    "getOperationRootType",
    ()=>Xn,
    "graphql",
    ()=>Bn,
    "graphqlSync",
    ()=>Hn,
    "introspectionFromSchema",
    ()=>Zn,
    "isValidNameError",
    ()=>Un,
    "lexicographicSortSchema",
    ()=>nt,
    "printIntrospectionSchema",
    ()=>st,
    "printSchema",
    ()=>tt,
    "printType",
    ()=>vn,
    "separateOperations",
    ()=>at,
    "stripIgnoredCharacters",
    ()=>it,
    "subscribe",
    ()=>Yn,
    "version",
    ()=>Kn,
    "versionInfo",
    ()=>xn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SocialMediaNext/socialnetwork/node_modules/@sidekick-monorepo/internship-backend/index-DEw3DZd-.mjs [app-client] (ecmascript)");
;
;
const Kn = "16.11.0", xn = Object.freeze({
    major: 16,
    minor: 11,
    patch: 0,
    preReleaseTag: null
});
function Bn(e) {
    return new Promise((n)=>n(ge(e)));
}
function Hn(e) {
    const n = ge(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(n)) throw new Error("GraphQL execution failed to complete synchronously.");
    return n;
}
function ge(e) {
    arguments.length < 2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const { schema: n, source: t, rootValue: r, contextValue: s, variableValues: i, operationName: o, fieldResolver: p, typeResolver: l } = e, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"])(n);
    if (m.length > 0) return {
        errors: m
    };
    let E;
    try {
        E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(t);
    } catch (u) {
        return {
            errors: [
                u
            ]
        };
    }
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n, E);
    return _.length > 0 ? {
        errors: _
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        schema: n,
        document: E,
        rootValue: r,
        contextValue: s,
        variableValues: i,
        operationName: o,
        fieldResolver: p,
        typeResolver: l
    });
}
function Ie(e) {
    return typeof (e == null ? void 0 : e[Symbol.asyncIterator]) == "function";
}
function Rn(e, n) {
    const t = e[Symbol.asyncIterator]();
    async function r(s) {
        if (s.done) return s;
        try {
            return {
                value: await n(s.value),
                done: !1
            };
        } catch (i) {
            if (typeof t.return == "function") try {
                await t.return();
            } catch  {}
            throw i;
        }
    }
    return {
        async next () {
            return r(await t.next());
        },
        async return () {
            return typeof t.return == "function" ? r(await t.return()) : {
                value: void 0,
                done: !0
            };
        },
        async throw (s) {
            if (typeof t.throw == "function") return r(await t.throw(s));
            throw s;
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
async function Yn(e) {
    arguments.length < 2 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const n = await hn(e);
    return Ie(n) ? Rn(n, (r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            ...e,
            rootValue: r
        })) : n;
}
function bn(e) {
    const n = e[0];
    return n && "document" in n ? n : {
        schema: n,
        // FIXME: when underlying TS bug fixed, see https://github.com/microsoft/TypeScript/issues/31613
        document: e[1],
        rootValue: e[2],
        contextValue: e[3],
        variableValues: e[4],
        operationName: e[5],
        subscribeFieldResolver: e[6]
    };
}
async function hn(...e) {
    const n = bn(e), { schema: t, document: r, variableValues: s } = n;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(t, r, s);
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n);
    if (!("schema" in i)) return {
        errors: i
    };
    try {
        const o = await _n(i);
        if (!Ie(o)) throw new Error(`Subscription field must return Async Iterable. Received: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(o)}.`);
        return o;
    } catch (o) {
        if (o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]) return {
            errors: [
                o
            ]
        };
        throw o;
    }
}
async function _n(e) {
    const { schema: n, fragments: t, operation: r, variableValues: s, rootValue: i } = e, o = n.getSubscriptionType();
    if (o == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]("Schema is not configured to execute subscription operation.", {
        nodes: r
    });
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(n, t, s, o, r.selectionSet), [l, m] = [
        ...p.entries()
    ][0], E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(n, o, m[0]);
    if (!E) {
        const T = m[0].name.value;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`The subscription field "${T}" is not defined.`, {
            nodes: m
        });
    }
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(void 0, l, o.name), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(e, E, m, o, _);
    try {
        var f;
        const T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(E, m[0], s), j = e.contextValue, V = await ((f = E.subscribe) !== null && f !== void 0 ? f : e.subscribeFieldResolver)(i, T, j, u);
        if (V instanceof Error) throw V;
        return V;
    } catch (T) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(T, m, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(_));
    }
}
function Wn(e) {
    return {
        Field (n) {
            const t = e.getFieldDef(), r = t == null ? void 0 : t.deprecationReason;
            if (t && r != null) {
                const s = e.getParentType();
                s != null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1), e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`The field ${s.name}.${t.name} is deprecated. ${r}`, {
                    nodes: n
                }));
            }
        },
        Argument (n) {
            const t = e.getArgument(), r = t == null ? void 0 : t.deprecationReason;
            if (t && r != null) {
                const s = e.getDirective();
                if (s != null) e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`Directive "@${s.name}" argument "${t.name}" is deprecated. ${r}`, {
                    nodes: n
                }));
                else {
                    const i = e.getParentType(), o = e.getFieldDef();
                    i != null && o != null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1), e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`Field "${i.name}.${o.name}" argument "${t.name}" is deprecated. ${r}`, {
                        nodes: n
                    }));
                }
            }
        },
        ObjectField (n) {
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(e.getParentInputType());
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(t)) {
                const r = t.getFields()[n.name.value], s = r == null ? void 0 : r.deprecationReason;
                s != null && e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`The input field ${t.name}.${r.name} is deprecated. ${s}`, {
                    nodes: n
                }));
            }
        },
        EnumValue (n) {
            const t = e.getEnumValue(), r = t == null ? void 0 : t.deprecationReason;
            if (t && r != null) {
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(e.getInputType());
                s != null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1), e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`The enum value "${s.name}.${t.name}" is deprecated. ${r}`, {
                    nodes: n
                }));
            }
        }
    };
}
function zn(e) {
    return {
        Field (n) {
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(e.getType());
            t && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(t) && e.reportError(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`GraphQL introspection has been disabled, but the requested query contained the field "${n.name.value}".`, {
                nodes: n
            }));
        }
    };
}
function gn(e) {
    const n = {
        descriptions: !0,
        specifiedByUrl: !1,
        directiveIsRepeatable: !1,
        schemaDescription: !1,
        inputValueDeprecation: !1,
        oneOf: !1,
        ...e
    }, t = n.descriptions ? "description" : "", r = n.specifiedByUrl ? "specifiedByURL" : "", s = n.directiveIsRepeatable ? "isRepeatable" : "", i = n.schemaDescription ? t : "";
    function o(l) {
        return n.inputValueDeprecation ? l : "";
    }
    const p = n.oneOf ? "isOneOf" : "";
    return `
    query IntrospectionQuery {
      __schema {
        ${i}
        queryType { name kind }
        mutationType { name kind }
        subscriptionType { name kind }
        types {
          ...FullType
        }
        directives {
          name
          ${t}
          ${s}
          locations
          args${o("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${t}
      ${r}
      ${p}
      fields(includeDeprecated: true) {
        name
        ${t}
        args${o("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${o("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${t}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${t}
      type { ...TypeRef }
      defaultValue
      ${o("isDeprecated")}
      ${o("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
function Jn(e, n) {
    let t = null;
    for (const s of e.definitions)if (s.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].OPERATION_DEFINITION) {
        var r;
        if (n == null) {
            if (t) return null;
            t = s;
        } else if (((r = s.name) === null || r === void 0 ? void 0 : r.value) === n) return s;
    }
    return t;
}
function Xn(e, n) {
    if (n.operation === "query") {
        const t = e.getQueryType();
        if (!t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]("Schema does not define the required query root type.", {
            nodes: n
        });
        return t;
    }
    if (n.operation === "mutation") {
        const t = e.getMutationType();
        if (!t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]("Schema is not configured for mutations.", {
            nodes: n
        });
        return t;
    }
    if (n.operation === "subscription") {
        const t = e.getSubscriptionType();
        if (!t) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]("Schema is not configured for subscriptions.", {
            nodes: n
        });
        return t;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"]("Can only have query, mutation and subscription operations.", {
        nodes: n
    });
}
function Zn(e, n) {
    const t = {
        specifiedByUrl: !0,
        directiveIsRepeatable: !0,
        schemaDescription: !0,
        inputValueDeprecation: !0,
        oneOf: !0,
        ...n
    }, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(gn(t)), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        schema: e,
        document: r
    });
    return !s.errors && s.data || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1), s.data;
}
function et(e, n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(e.__schema) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(e)}.`);
    const t = e.__schema, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(t.types, (a)=>a.name, (a)=>u(a));
    for (const a of [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"]
    ])r[a.name] && (r[a.name] = a);
    const s = t.queryType ? E(t.queryType) : null, i = t.mutationType ? E(t.mutationType) : null, o = t.subscriptionType ? E(t.subscriptionType) : null, p = t.directives ? t.directives.map(Ue) : [];
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"]({
        description: t.description,
        query: s,
        mutation: i,
        subscription: o,
        types: Object.values(r),
        directives: p,
        assumeValid: n == null ? void 0 : n.assumeValid
    });
    //TURBOPACK unreachable
    ;
    function l(a) {
        if (a.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].LIST) {
            const c = a.ofType;
            if (!c) throw new Error("Decorated type deeper than introspection query.");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"](l(c));
        }
        if (a.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].NON_NULL) {
            const c = a.ofType;
            if (!c) throw new Error("Decorated type deeper than introspection query.");
            const b = l(c);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])(b));
        }
        return m(a);
    }
    function m(a) {
        const c = a.name;
        if (!c) throw new Error(`Unknown type reference: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a)}.`);
        const b = r[c];
        if (!b) throw new Error(`Invalid or incomplete schema, unknown type: ${c}. Ensure that a full introspection query is used in order to build a client schema.`);
        return b;
    }
    function E(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])(m(a));
    }
    function _(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"])(m(a));
    }
    function u(a) {
        if (a != null && a.name != null && a.kind != null) switch(a.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].SCALAR:
                return f(a);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].OBJECT:
                return j(a);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].INTERFACE:
                return J(a);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].UNION:
                return V(a);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].ENUM:
                return $e(a);
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].INPUT_OBJECT:
                return Fe(a);
        }
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${c}.`);
    }
    function f(a) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"]({
            name: a.name,
            description: a.description,
            specifiedByURL: a.specifiedByURL
        });
    }
    function T(a) {
        if (a.interfaces === null && a.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"].INTERFACE) return [];
        if (!a.interfaces) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing interfaces: ${c}.`);
        }
        return a.interfaces.map(_);
    }
    function j(a) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"]({
            name: a.name,
            description: a.description,
            interfaces: ()=>T(a),
            fields: ()=>X(a)
        });
    }
    function J(a) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"]({
            name: a.name,
            description: a.description,
            interfaces: ()=>T(a),
            fields: ()=>X(a)
        });
    }
    function V(a) {
        if (!a.possibleTypes) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing possibleTypes: ${c}.`);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]({
            name: a.name,
            description: a.description,
            types: ()=>a.possibleTypes.map(E)
        });
    }
    function $e(a) {
        if (!a.enumValues) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing enumValues: ${c}.`);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"]({
            name: a.name,
            description: a.description,
            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(a.enumValues, (c)=>c.name, (c)=>({
                    description: c.description,
                    deprecationReason: c.deprecationReason
                }))
        });
    }
    function Fe(a) {
        if (!a.inputFields) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing inputFields: ${c}.`);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]({
            name: a.name,
            description: a.description,
            fields: ()=>Q(a.inputFields),
            isOneOf: a.isOneOf
        });
    }
    function X(a) {
        if (!a.fields) throw new Error(`Introspection result missing fields: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a)}.`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(a.fields, (c)=>c.name, Le);
    }
    function Le(a) {
        const c = l(a.type);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])(c)) {
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(c);
            throw new Error(`Introspection must provide output type for fields, but received: ${b}.`);
        }
        if (!a.args) {
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing field args: ${b}.`);
        }
        return {
            description: a.description,
            deprecationReason: a.deprecationReason,
            type: c,
            args: Q(a.args)
        };
    }
    function Q(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(a, (c)=>c.name, Me);
    }
    function Me(a) {
        const c = l(a.type);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"])(c)) {
            const Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(c);
            throw new Error(`Introspection must provide input type for arguments, but received: ${Ce}.`);
        }
        const b = a.defaultValue != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"])(a.defaultValue), c) : void 0;
        return {
            description: a.description,
            type: c,
            defaultValue: b,
            deprecationReason: a.deprecationReason
        };
    }
    function Ue(a) {
        if (!a.args) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing directive args: ${c}.`);
        }
        if (!a.locations) {
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a);
            throw new Error(`Introspection result missing directive locations: ${c}.`);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"]({
            name: a.name,
            description: a.description,
            isRepeatable: a.isRepeatable,
            locations: a.locations.slice(),
            args: Q(a.args)
        });
    }
}
function nt(e) {
    const n = e.toConfig(), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(x(n.types), (u)=>u.name, _);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"]({
        ...n,
        types: Object.values(t),
        directives: x(n.directives).map(o),
        query: i(n.query),
        mutation: i(n.mutation),
        subscription: i(n.subscription)
    });
    //TURBOPACK unreachable
    ;
    function r(u) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(u) ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"](r(u.ofType)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(u) ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"](r(u.ofType)) : s(u);
    }
    function s(u) {
        return t[u.name];
    }
    function i(u) {
        return u && s(u);
    }
    function o(u) {
        const f = u.toConfig();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"]({
            ...f,
            locations: Ne(f.locations, (T)=>T),
            args: p(f.args)
        });
    }
    function p(u) {
        return P(u, (f)=>({
                ...f,
                type: r(f.type)
            }));
    }
    function l(u) {
        return P(u, (f)=>({
                ...f,
                type: r(f.type),
                args: f.args && p(f.args)
            }));
    }
    function m(u) {
        return P(u, (f)=>({
                ...f,
                type: r(f.type)
            }));
    }
    function E(u) {
        return x(u).map(s);
    }
    function _(u) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])(u) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(u)) return u;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(u)) {
            const f = u.toConfig();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"]({
                ...f,
                interfaces: ()=>E(f.interfaces),
                fields: ()=>l(f.fields)
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(u)) {
            const f = u.toConfig();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"]({
                ...f,
                interfaces: ()=>E(f.interfaces),
                fields: ()=>l(f.fields)
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(u)) {
            const f = u.toConfig();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]({
                ...f,
                types: ()=>E(f.types)
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(u)) {
            const f = u.toConfig();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"]({
                ...f,
                values: P(f.values, (T)=>T)
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(u)) {
            const f = u.toConfig();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]({
                ...f,
                fields: ()=>m(f.fields)
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1, "Unexpected type: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(u));
    }
}
function P(e, n) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const r of Object.keys(e).sort(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Y"]))t[r] = n(e[r]);
    return t;
}
function x(e) {
    return Ne(e, (n)=>n.name);
}
function Ne(e, n) {
    return e.slice().sort((t, r)=>{
        const s = n(t), i = n(r);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Y"])(s, i);
    });
}
function tt(e) {
    return Ae(e, (n)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a3"])(n), In);
}
function st(e) {
    return Ae(e, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a3"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"]);
}
function In(e) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4"])(e) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(e);
}
function Ae(e, n, t) {
    const r = e.getDirectives().filter(n), s = Object.values(e.getTypeMap()).filter(t);
    return [
        Nn(e),
        ...r.map((i)=>Ln(i)),
        ...s.map((i)=>vn(i))
    ].filter(Boolean).join(`

`);
}
function Nn(e) {
    if (e.description == null && An(e)) return;
    const n = [], t = e.getQueryType();
    t && n.push(`  query: ${t.name}`);
    const r = e.getMutationType();
    r && n.push(`  mutation: ${r.name}`);
    const s = e.getSubscriptionType();
    return s && n.push(`  subscription: ${s.name}`), R(e) + `schema {
${n.join(`
`)}
}`;
}
function An(e) {
    const n = e.getQueryType();
    if (n && n.name !== "Query") return !1;
    const t = e.getMutationType();
    if (t && t.name !== "Mutation") return !1;
    const r = e.getSubscriptionType();
    return !(r && r.name !== "Subscription");
}
function vn(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])(e)) return On(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(e)) return Vn(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(e)) return wn(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(e)) return Sn(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(e)) return $n(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(e)) return Fn(e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1, "Unexpected type: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(e));
}
function On(e) {
    return R(e) + `scalar ${e.name}` + Mn(e);
}
function ve(e) {
    const n = e.getInterfaces();
    return n.length ? " implements " + n.map((t)=>t.name).join(" & ") : "";
}
function Vn(e) {
    return R(e) + `type ${e.name}` + ve(e) + Oe(e);
}
function wn(e) {
    return R(e) + `interface ${e.name}` + ve(e) + Oe(e);
}
function Sn(e) {
    const n = e.getTypes(), t = n.length ? " = " + n.join(" | ") : "";
    return R(e) + "union " + e.name + t;
}
function $n(e) {
    const n = e.getValues().map((t, r)=>R(t, "  ", !r) + "  " + t.name + z(t.deprecationReason));
    return R(e) + `enum ${e.name}` + W(n);
}
function Fn(e) {
    const n = Object.values(e.getFields()).map((t, r)=>R(t, "  ", !r) + "  " + H(t));
    return R(e) + `input ${e.name}` + (e.isOneOf ? " @oneOf" : "") + W(n);
}
function Oe(e) {
    const n = Object.values(e.getFields()).map((t, r)=>R(t, "  ", !r) + "  " + t.name + Ve(t.args, "  ") + ": " + String(t.type) + z(t.deprecationReason));
    return W(n);
}
function W(e) {
    return e.length !== 0 ? ` {
` + e.join(`
`) + `
}` : "";
}
function Ve(e, n = "") {
    return e.length === 0 ? "" : e.every((t)=>!t.description) ? "(" + e.map(H).join(", ") + ")" : `(
` + e.map((t, r)=>R(t, "  " + n, !r) + "  " + n + H(t)).join(`
`) + `
` + n + ")";
}
function H(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])(e.defaultValue, e.type);
    let t = e.name + ": " + String(e.type);
    return n && (t += ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])(n)}`), t + z(e.deprecationReason);
}
function Ln(e) {
    return R(e) + "directive @" + e.name + Ve(e.args) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ");
}
function z(e) {
    return e == null ? "" : e !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"] ? ` @deprecated(reason: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].STRING,
        value: e
    })})` : " @deprecated";
}
function Mn(e) {
    return e.specifiedByURL == null ? "" : ` @specifiedBy(url: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].STRING,
        value: e.specifiedByURL
    })})`;
}
function R(e, n = "", t = !0) {
    const { description: r } = e;
    if (r == null) return "";
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].STRING,
        value: r,
        block: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a2"])(r)
    });
    return (n && !t ? `
` + n : n) + s.replace(/\n/g, `
` + n) + `
`;
}
function rt(e) {
    const n = [];
    for (const t of e)n.push(...t.definitions);
    return {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].DOCUMENT,
        definitions: n
    };
}
function at(e) {
    const n = [], t = /* @__PURE__ */ Object.create(null);
    for (const s of e.definitions)switch(s.kind){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].OPERATION_DEFINITION:
            n.push(s);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].FRAGMENT_DEFINITION:
            t[s.name.value] = ne(s.selectionSet);
            break;
    }
    const r = /* @__PURE__ */ Object.create(null);
    for (const s of n){
        const i = /* @__PURE__ */ new Set();
        for (const p of ne(s.selectionSet))we(i, t, p);
        const o = s.name ? s.name.value : "";
        r[o] = {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].DOCUMENT,
            definitions: e.definitions.filter((p)=>p === s || p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"].FRAGMENT_DEFINITION && i.has(p.name.value))
        };
    }
    return r;
}
function we(e, n, t) {
    if (!e.has(t)) {
        e.add(t);
        const r = n[t];
        if (r !== void 0) for (const s of r)we(e, n, s);
    }
}
function ne(e) {
    const n = [];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a5"])(e, {
        FragmentSpread (t) {
            n.push(t.name.value);
        }
    }), n;
}
function it(e) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a6"])(e) ? e : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a7"](e), t = n.body, r = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a8"](n);
    let s = "", i = !1;
    for(; r.advance().kind !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"].EOF;){
        const o = r.token, p = o.kind, l = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aa"])(o.kind);
        i && (l || o.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"].SPREAD) && (s += " ");
        const m = t.slice(o.start, o.end);
        p === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"].BLOCK_STRING ? s += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ab"])(o.value, {
            minimize: !0
        }) : s += m, i = l;
    }
    return s;
}
function ot(e) {
    const n = Un(e);
    if (n) throw n;
    return e;
}
function Un(e) {
    if (typeof e == "string" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(!1, "Expected name to be a string."), e.startsWith("__")) return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"](`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ac"])(e);
    } catch (n) {
        return n;
    }
}
var d;
(function(e) {
    e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
})(d || (d = {}));
var h;
(function(e) {
    e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
})(h || (h = {}));
function ut(e, n) {
    return Se(e, n).filter((t)=>t.type in d);
}
function ct(e, n) {
    return Se(e, n).filter((t)=>t.type in h);
}
function Se(e, n) {
    return [
        ...Gn(e, n),
        ...Cn(e, n)
    ];
}
function Cn(e, n) {
    const t = [], r = N(e.getDirectives(), n.getDirectives());
    for (const s of r.removed)t.push({
        type: d.DIRECTIVE_REMOVED,
        description: `${s.name} was removed.`
    });
    for (const [s, i] of r.persisted){
        const o = N(s.args, i.args);
        for (const p of o.added)(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"])(p) && t.push({
            type: d.REQUIRED_DIRECTIVE_ARG_ADDED,
            description: `A required arg ${p.name} on directive ${s.name} was added.`
        });
        for (const p of o.removed)t.push({
            type: d.DIRECTIVE_ARG_REMOVED,
            description: `${p.name} was removed from ${s.name}.`
        });
        s.isRepeatable && !i.isRepeatable && t.push({
            type: d.DIRECTIVE_REPEATABLE_REMOVED,
            description: `Repeatable flag was removed from ${s.name}.`
        });
        for (const p of s.locations)i.locations.includes(p) || t.push({
            type: d.DIRECTIVE_LOCATION_REMOVED,
            description: `${p} was removed from ${s.name}.`
        });
    }
    return t;
}
function Gn(e, n) {
    const t = [], r = N(Object.values(e.getTypeMap()), Object.values(n.getTypeMap()));
    for (const s of r.removed)t.push({
        type: d.TYPE_REMOVED,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4"])(s) ? `Standard scalar ${s.name} was removed because it is not referenced anymore.` : `${s.name} was removed.`
    });
    for (const [s, i] of r.persisted)(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(i) ? t.push(...qn(s, i)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(i) ? t.push(...kn(s, i)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(i) ? t.push(...Pn(s, i)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(i) ? t.push(...se(s, i), ...te(s, i)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(i) ? t.push(...se(s, i), ...te(s, i)) : s.constructor !== i.constructor && t.push({
        type: d.TYPE_CHANGED_KIND,
        description: `${s.name} changed from ${re(s)} to ${re(i)}.`
    });
    return t;
}
function Pn(e, n) {
    const t = [], r = N(Object.values(e.getFields()), Object.values(n.getFields()));
    for (const s of r.added)(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ae"])(s) ? t.push({
        type: d.REQUIRED_INPUT_FIELD_ADDED,
        description: `A required field ${s.name} on input type ${e.name} was added.`
    }) : t.push({
        type: h.OPTIONAL_INPUT_FIELD_ADDED,
        description: `An optional field ${s.name} on input type ${e.name} was added.`
    });
    for (const s of r.removed)t.push({
        type: d.FIELD_REMOVED,
        description: `${e.name}.${s.name} was removed.`
    });
    for (const [s, i] of r.persisted)$(s.type, i.type) || t.push({
        type: d.FIELD_CHANGED_KIND,
        description: `${e.name}.${s.name} changed type from ${String(s.type)} to ${String(i.type)}.`
    });
    return t;
}
function kn(e, n) {
    const t = [], r = N(e.getTypes(), n.getTypes());
    for (const s of r.added)t.push({
        type: h.TYPE_ADDED_TO_UNION,
        description: `${s.name} was added to union type ${e.name}.`
    });
    for (const s of r.removed)t.push({
        type: d.TYPE_REMOVED_FROM_UNION,
        description: `${s.name} was removed from union type ${e.name}.`
    });
    return t;
}
function qn(e, n) {
    const t = [], r = N(e.getValues(), n.getValues());
    for (const s of r.added)t.push({
        type: h.VALUE_ADDED_TO_ENUM,
        description: `${s.name} was added to enum type ${e.name}.`
    });
    for (const s of r.removed)t.push({
        type: d.VALUE_REMOVED_FROM_ENUM,
        description: `${s.name} was removed from enum type ${e.name}.`
    });
    return t;
}
function te(e, n) {
    const t = [], r = N(e.getInterfaces(), n.getInterfaces());
    for (const s of r.added)t.push({
        type: h.IMPLEMENTED_INTERFACE_ADDED,
        description: `${s.name} added to interfaces implemented by ${e.name}.`
    });
    for (const s of r.removed)t.push({
        type: d.IMPLEMENTED_INTERFACE_REMOVED,
        description: `${e.name} no longer implements interface ${s.name}.`
    });
    return t;
}
function se(e, n) {
    const t = [], r = N(Object.values(e.getFields()), Object.values(n.getFields()));
    for (const s of r.removed)t.push({
        type: d.FIELD_REMOVED,
        description: `${e.name}.${s.name} was removed.`
    });
    for (const [s, i] of r.persisted)t.push(...jn(e, s, i)), S(s.type, i.type) || t.push({
        type: d.FIELD_CHANGED_KIND,
        description: `${e.name}.${s.name} changed type from ${String(s.type)} to ${String(i.type)}.`
    });
    return t;
}
function jn(e, n, t) {
    const r = [], s = N(n.args, t.args);
    for (const i of s.removed)r.push({
        type: d.ARG_REMOVED,
        description: `${e.name}.${n.name} arg ${i.name} was removed.`
    });
    for (const [i, o] of s.persisted)if (!$(i.type, o.type)) r.push({
        type: d.ARG_CHANGED_KIND,
        description: `${e.name}.${n.name} arg ${i.name} has changed type from ${String(i.type)} to ${String(o.type)}.`
    });
    else if (i.defaultValue !== void 0) if (o.defaultValue === void 0) r.push({
        type: h.ARG_DEFAULT_VALUE_CHANGE,
        description: `${e.name}.${n.name} arg ${i.name} defaultValue was removed.`
    });
    else {
        const l = ae(i.defaultValue, i.type), m = ae(o.defaultValue, o.type);
        l !== m && r.push({
            type: h.ARG_DEFAULT_VALUE_CHANGE,
            description: `${e.name}.${n.name} arg ${i.name} has changed defaultValue from ${l} to ${m}.`
        });
    }
    for (const i of s.added)(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"])(i) ? r.push({
        type: d.REQUIRED_ARG_ADDED,
        description: `A required arg ${i.name} on ${e.name}.${n.name} was added.`
    }) : r.push({
        type: h.OPTIONAL_ARG_ADDED,
        description: `An optional arg ${i.name} on ${e.name}.${n.name} was added.`
    });
    return r;
}
function S(e, n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(e) ? // if they're both lists, make sure the underlying types are compatible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(n) && S(e.ofType, n.ofType) || // moving from nullable to non-null of the same underlying type is safe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(n) && S(e, n.ofType) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(n) && S(e.ofType, n.ofType) : // if they're both named types, see if their names are equivalent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["af"])(n) && e.name === n.name || // moving from nullable to non-null of the same underlying type is safe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(n) && S(e, n.ofType);
}
function $(e, n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(e) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"])(n) && $(e.ofType, n.ofType) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e) ? // if they're both non-null, make sure the underlying types are
    // compatible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(n) && $(e.ofType, n.ofType) || // moving from non-null to nullable of the same underlying type is safe
    !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(n) && $(e.ofType, n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["af"])(n) && e.name === n.name;
}
function re(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])(e)) return "a Scalar type";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"])(e)) return "an Object type";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])(e)) return "an Interface type";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"])(e)) return "a Union type";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"])(e)) return "an Enum type";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(e)) return "an Input type";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1, "Unexpected type: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(e));
}
function ae(e, n) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])(e, n);
    return t != null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"])(!1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ag"])(t));
}
function N(e, n) {
    const t = [], r = [], s = [], i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ah"])(e, ({ name: p })=>p), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ah"])(n, ({ name: p })=>p);
    for (const p of e){
        const l = o[p.name];
        l === void 0 ? r.push(p) : s.push([
            p,
            l
        ]);
    }
    for (const p of n)i[p.name] === void 0 && t.push(p);
    return {
        added: t,
        persisted: s,
        removed: r
    };
}
;
}),
"[project]/Documents/SocialMediaNext/socialnetwork/node_modules/@sidekick-monorepo/internship-backend/index-DNVJPbOy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BREAK",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bi"],
    "BreakingChangeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BreakingChangeType"],
    "DEFAULT_DEPRECATION_REASON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a1"],
    "DangerousChangeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DangerousChangeType"],
    "DirectiveLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bj"],
    "ExecutableDefinitionsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bB"],
    "FieldsOnCorrectTypeRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bC"],
    "FragmentsOnCompositeTypesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bD"],
    "GRAPHQL_MAX_INT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ap"],
    "GRAPHQL_MIN_INT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aq"],
    "GraphQLBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["an"],
    "GraphQLDeprecatedDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["au"],
    "GraphQLDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N"],
    "GraphQLEnumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"],
    "GraphQLError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"],
    "GraphQLFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["al"],
    "GraphQLID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ao"],
    "GraphQLIncludeDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["as"],
    "GraphQLInputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"],
    "GraphQLInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ak"],
    "GraphQLInterfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"],
    "GraphQLList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["O"],
    "GraphQLNonNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"],
    "GraphQLObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"],
    "GraphQLOneOfDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aw"],
    "GraphQLScalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"],
    "GraphQLSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"],
    "GraphQLSkipDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"],
    "GraphQLSpecifiedByDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["av"],
    "GraphQLString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["am"],
    "GraphQLUnionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"],
    "Kind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"],
    "KnownArgumentNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bE"],
    "KnownDirectivesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bF"],
    "KnownFragmentNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bG"],
    "KnownTypeNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bH"],
    "Lexer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a8"],
    "Location",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b8"],
    "LoneAnonymousOperationRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bI"],
    "LoneSchemaDefinitionRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c0"],
    "MaxIntrospectionDepthRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b$"],
    "NoDeprecatedCustomRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NoDeprecatedCustomRule"],
    "NoFragmentCyclesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bJ"],
    "NoSchemaIntrospectionCustomRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NoSchemaIntrospectionCustomRule"],
    "NoUndefinedVariablesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bK"],
    "NoUnusedFragmentsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bL"],
    "NoUnusedVariablesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bM"],
    "OperationTypeNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b9"],
    "OverlappingFieldsCanBeMergedRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bN"],
    "PossibleFragmentSpreadsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bO"],
    "PossibleTypeExtensionsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c7"],
    "ProvidedRequiredArgumentsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bP"],
    "ScalarLeafsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bQ"],
    "SchemaMetaFieldDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aF"],
    "SingleFieldSubscriptionsRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bR"],
    "Source",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a7"],
    "Token",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b7"],
    "TokenKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a9"],
    "TypeInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cg"],
    "TypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["T"],
    "TypeMetaFieldDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aG"],
    "TypeNameMetaFieldDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aH"],
    "UniqueArgumentDefinitionNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c5"],
    "UniqueArgumentNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bS"],
    "UniqueDirectiveNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c6"],
    "UniqueDirectivesPerLocationRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bT"],
    "UniqueEnumValueNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c3"],
    "UniqueFieldDefinitionNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c4"],
    "UniqueFragmentNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bU"],
    "UniqueInputFieldNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bV"],
    "UniqueOperationNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bW"],
    "UniqueOperationTypesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c1"],
    "UniqueTypeNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c2"],
    "UniqueVariableNamesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bX"],
    "ValidationContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["by"],
    "ValuesOfCorrectTypeRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bY"],
    "VariablesAreInputTypesRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bZ"],
    "VariablesInAllowedPositionRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b_"],
    "__Directive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ay"],
    "__DirectiveLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["az"],
    "__EnumValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aD"],
    "__Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aB"],
    "__InputValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aC"],
    "__Schema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ax"],
    "__Type",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aA"],
    "__TypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aE"],
    "assertAbstractType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b1"],
    "assertCompositeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b0"],
    "assertDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aR"],
    "assertEnumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aV"],
    "assertEnumValueName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b6"],
    "assertInputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aW"],
    "assertInputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aZ"],
    "assertInterfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"],
    "assertLeafType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a$"],
    "assertListType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aX"],
    "assertName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ac"],
    "assertNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b3"],
    "assertNonNullType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aY"],
    "assertNullableType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"],
    "assertObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"],
    "assertOutputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a_"],
    "assertScalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aT"],
    "assertSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aQ"],
    "assertType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aS"],
    "assertUnionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aU"],
    "assertValidName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertValidName"],
    "assertValidSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b5"],
    "assertWrappingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b2"],
    "astFromValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"],
    "buildASTSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cb"],
    "buildClientSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildClientSchema"],
    "buildSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cc"],
    "coerceInputValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ci"],
    "concatAST",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatAST"],
    "createSourceEventStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSourceEventStream"],
    "defaultFieldResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bu"],
    "defaultTypeResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bv"],
    "doTypesOverlap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cl"],
    "execute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"],
    "executeSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"],
    "extendSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cd"],
    "findBreakingChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["findBreakingChanges"],
    "findDangerousChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["findDangerousChanges"],
    "formatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ca"],
    "getArgumentValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"],
    "getDirectiveValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bx"],
    "getEnterLeaveForKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bh"],
    "getIntrospectionQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getIntrospectionQuery"],
    "getLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ba"],
    "getNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"],
    "getNullableType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b4"],
    "getOperationAST",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getOperationAST"],
    "getOperationRootType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getOperationRootType"],
    "getVariableValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bw"],
    "getVisitFn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bg"],
    "graphql",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["graphql"],
    "graphqlSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["graphqlSync"],
    "introspectionFromSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["introspectionFromSchema"],
    "introspectionTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"],
    "isAbstractType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aN"],
    "isCompositeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aM"],
    "isConstValueNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bo"],
    "isDefinitionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bk"],
    "isDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aJ"],
    "isEnumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"],
    "isEqualType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cj"],
    "isExecutableDefinitionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bl"],
    "isInputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"],
    "isInputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"],
    "isInterfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"],
    "isIntrospectionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
    "isLeafType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aL"],
    "isListType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z"],
    "isNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["af"],
    "isNonNullType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"],
    "isNullableType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aP"],
    "isObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["U"],
    "isOutputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"],
    "isRequiredArgument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ad"],
    "isRequiredInputField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ae"],
    "isScalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"],
    "isSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aI"],
    "isSelectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bm"],
    "isSpecifiedDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a3"],
    "isSpecifiedScalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4"],
    "isType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aK"],
    "isTypeDefinitionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["br"],
    "isTypeExtensionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bt"],
    "isTypeNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bp"],
    "isTypeSubTypeOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ck"],
    "isTypeSystemDefinitionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bq"],
    "isTypeSystemExtensionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bs"],
    "isUnionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"],
    "isValidNameError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidNameError"],
    "isValueNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn"],
    "isWrappingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aO"],
    "lexicographicSortSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicographicSortSchema"],
    "locatedError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"],
    "parseConstValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bd"],
    "parseType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["be"],
    "parseValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"],
    "print",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a0"],
    "printError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c9"],
    "printIntrospectionSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printIntrospectionSchema"],
    "printLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bb"],
    "printSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printSchema"],
    "printSourceLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bc"],
    "printType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printType"],
    "recommendedRules",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bA"],
    "resolveObjMapThunk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ai"],
    "resolveReadonlyArrayThunk",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aj"],
    "responsePathAsArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    "separateOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["separateOperations"],
    "specifiedDirectives",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ar"],
    "specifiedRules",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bz"],
    "specifiedScalarTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"],
    "stripIgnoredCharacters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stripIgnoredCharacters"],
    "subscribe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subscribe"],
    "syntaxError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c8"],
    "typeFromAST",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ce"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"],
    "validateSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"],
    "valueFromAST",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"],
    "valueFromASTUntyped",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cf"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["version"],
    "versionInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["versionInfo"],
    "visit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a5"],
    "visitInParallel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bf"],
    "visitWithTypeInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ch"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DNVJPbOy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/SocialMediaNext/socialnetwork/node_modules/@sidekick-monorepo/internship-backend/index-DNVJPbOy.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SocialMediaNext$2f$socialnetwork$2f$node_modules$2f40$sidekick$2d$monorepo$2f$internship$2d$backend$2f$index$2d$DEw3DZd$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SocialMediaNext/socialnetwork/node_modules/@sidekick-monorepo/internship-backend/index-DEw3DZd-.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=06bde_%40sidekick-monorepo_internship-backend_index-DNVJPbOy_mjs_2ebc3941._.js.map