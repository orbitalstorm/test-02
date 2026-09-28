(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/features/game/GameArena.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameArena",
    ()=>GameArena
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$canvasRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/canvasRenderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGameControls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/game/GameHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/game/GameOverlay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function GameArena({ snapshot, currentPlayerId, sendMessage, onLeave }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameControls"])({
        enabled: snapshot.status === "playing",
        sendMessage
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameArena.useEffect": ()=>{
            let animId;
            const loop = {
                "GameArena.useEffect.loop": ()=>{
                    if (canvasRef.current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$canvasRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderGame"])(canvasRef.current, snapshot, currentPlayerId);
                    }
                    animId = requestAnimationFrame(loop);
                }
            }["GameArena.useEffect.loop"];
            animId = requestAnimationFrame(loop);
            return ({
                "GameArena.useEffect": ()=>cancelAnimationFrame(animId)
            })["GameArena.useEffect"];
        }
    }["GameArena.useEffect"], [
        snapshot,
        currentPlayerId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 w-full max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameHeader"], {
                snapshot: snapshot,
                currentPlayerId: currentPlayerId,
                onLeave: onLeave
            }, void 0, false, {
                fileName: "[project]/src/components/features/game/GameArena.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-4 border-stone-800 rounded-2xl overflow-hidden shadow-2xl bg-stone-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_COLS"] * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"],
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROWS"] * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"],
                        className: "block max-w-full h-auto cursor-crosshair"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/game/GameArena.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameOverlay"], {
                        snapshot: snapshot,
                        currentPlayerId: currentPlayerId,
                        onRestart: ()=>sendMessage({
                                type: "restart_round"
                            }),
                        onLeave: onLeave
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/game/GameArena.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/game/GameArena.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-stone-400 font-mono text-xs py-2 px-4 bg-stone-900/60 rounded-xl border border-stone-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "🎮 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-stone-200",
                                children: "ZQSD / Flèches"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameArena.tsx",
                                lineNumber: 70,
                                columnNumber: 18
                            }, this),
                            " : Marche / Pousser bombe (Kick 👟)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/game/GameArena.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "💣 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-stone-200",
                                children: "Espace"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameArena.tsx",
                                lineNumber: 71,
                                columnNumber: 18
                            }, this),
                            " : Poser une bombe"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/game/GameArena.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "🥊 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-stone-200",
                                children: "X / E / Shift"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameArena.tsx",
                                lineNumber: 72,
                                columnNumber: 18
                            }, this),
                            " : Coup de poing par-dessus les murs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/game/GameArena.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/game/GameArena.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/game/GameArena.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(GameArena, "UPmygTGAleewctydSpzLEHNXoiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameControls"]
    ];
});
_c = GameArena;
var _c;
__turbopack_context__.k.register(_c, "GameArena");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/game/GameClientContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameClientContainer",
    ()=>GameClientContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGameSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$JoinRoomCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/lobby/JoinRoomCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$LobbyRoomView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/lobby/LobbyRoomView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameArena$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/game/GameArena.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GameClientContainer() {
    _s();
    const { snapshot, myPlayerId, isConnected, errorMsg, connect, disconnect, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameSocket"])();
    const handleJoin = (roomId, playerName)=>{
        const wsHost = ("TURBOPACK compile-time truthy", 1) ? window.location.hostname : "TURBOPACK unreachable";
        const wsUrl = `ws://${wsHost}:3001`;
        connect(wsUrl, roomId, playerName);
    };
    const handleSetReady = (ready)=>{
        sendMessage({
            type: "set_ready",
            ready
        });
    };
    const handleStartGame = ()=>{
        sendMessage({
            type: "start_game"
        });
    };
    if (!isConnected || !snapshot) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[75vh] w-full px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$JoinRoomCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JoinRoomCard"], {
                onJoin: handleJoin,
                error: errorMsg
            }, void 0, false, {
                fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    if (snapshot.status === "waiting") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[75vh] w-full px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$LobbyRoomView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LobbyRoomView"], {
                snapshot: snapshot,
                currentPlayerId: myPlayerId,
                onSetReady: handleSetReady,
                onStartGame: handleStartGame,
                onLeave: disconnect
            }, void 0, false, {
                fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[85vh] w-full px-4 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$game$2f$GameArena$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameArena"], {
            snapshot: snapshot,
            currentPlayerId: myPlayerId,
            sendMessage: sendMessage,
            onLeave: disconnect
        }, void 0, false, {
            fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/game/GameClientContainer.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(GameClientContainer, "uY254Km83RIBlrqwCJRHDzLe2ZA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGameSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameSocket"]
    ];
});
_c = GameClientContainer;
var _c;
__turbopack_context__.k.register(_c, "GameClientContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/game/GameHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameHeader",
    ()=>GameHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/audio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bomb.mjs [app-client] (ecmascript) <export default as Bomb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.mjs [app-client] (ecmascript) <export default as Skull>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SLOT_BORDER_CLASSES = [
    "border-blue-500",
    "border-red-500",
    "border-green-500",
    "border-yellow-500"
];
function GameHeader({ snapshot, currentPlayerId, onLeave }) {
    _s();
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const players = Object.values(snapshot.players);
    const handleToggleSound = ()=>{
        const isNowMuted = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundManager"].toggleMute();
        setMuted(isNowMuted);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-2xl backdrop-blur-md shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2.5",
                children: players.map((p)=>{
                    const isMe = p.id === currentPlayerId;
                    const borderClass = SLOT_BORDER_CLASSES[p.slot] || "border-stone-600";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 transition-all ${borderClass} ${p.alive ? "bg-stone-800/80" : "bg-stone-950/60 opacity-40 grayscale"} ${isMe ? "ring-2 ring-amber-400" : ""}`,
                        children: [
                            !p.alive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
                                className: "w-4 h-4 text-rose-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-xs font-mono text-stone-100",
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            p.alive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-[11px] font-mono text-stone-300 ml-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center text-amber-400",
                                        title: "Bombes restantes",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__["Bomb"], {
                                                className: "w-3 h-3 mr-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, this),
                                            p.bombsMax - p.bombsActive,
                                            "/",
                                            p.bombsMax
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center text-orange-400",
                                        title: "Portée flamme",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                className: "w-3 h-3 mr-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                                lineNumber: 50,
                                                columnNumber: 21
                                            }, this),
                                            p.flameRadius
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center text-yellow-400",
                                        title: "Vitesse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-3 h-3 mr-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this),
                                            p.speed.toFixed(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this),
                                    p.kickCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-1 rounded bg-amber-950/80 text-[10px]",
                                        title: "Coup de pied actif",
                                        children: [
                                            "👟",
                                            p.kickCount > 1 ? `x${p.kickCount}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this),
                                    p.punchCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-1 rounded bg-blue-950/80 text-[10px]",
                                        title: "Coup de poing actif",
                                        children: [
                                            "🥊",
                                            p.punchCount > 1 ? `x${p.punchCount}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                        lineNumber: 63,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggleSound,
                        className: "p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors",
                        title: muted ? "Activer le son" : "Couper le son",
                        children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                            className: "w-4 h-4 text-rose-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameHeader.tsx",
                            lineNumber: 80,
                            columnNumber: 20
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameHeader.tsx",
                            lineNumber: 80,
                            columnNumber: 68
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLeave,
                        className: "p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors",
                        title: "Quitter la partie",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameHeader.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/game/GameHeader.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/game/GameHeader.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/game/GameHeader.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(GameHeader, "3OCBGa4GALlamH/FXgApPSN++nQ=");
_c = GameHeader;
var _c;
__turbopack_context__.k.register(_c, "GameHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/game/GameOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameOverlay",
    ()=>GameOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.mjs [app-client] (ecmascript) <export default as Skull>");
"use client";
;
;
;
function GameOverlay({ snapshot, currentPlayerId, onRestart, onLeave }) {
    if (snapshot.status !== "gameover") return null;
    const winner = snapshot.winnerId ? snapshot.players[snapshot.winnerId] : null;
    const isMeWinner = winner?.id === currentPlayerId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-20 animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm bg-stone-900 border-2 border-stone-700 rounded-3xl p-6 text-center shadow-2xl flex flex-col items-center",
            children: [
                winner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mb-4 animate-bounce",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-black uppercase text-stone-100 font-mono tracking-wider mb-1",
                            children: isMeWinner ? "Victoire Éclatante !" : "Fin de Partie"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-300 font-mono mb-6",
                            children: [
                                "Vainqueur : ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-400 font-bold",
                                    children: winner.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                                    lineNumber: 37,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-black uppercase text-stone-100 font-mono tracking-wider mb-1",
                            children: "Match Nul !"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-stone-400 font-mono mb-6",
                            children: "Tous les joueurs ont succombé aux flammes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            size: "lg",
                            onClick: onRestart,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                "Rejouer un Round"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "md",
                            onClick: onLeave,
                            className: "w-full",
                            children: "Retour au Lobby"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/game/GameOverlay.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/game/GameOverlay.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/game/GameOverlay.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GameOverlay;
var _c;
__turbopack_context__.k.register(_c, "GameOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/lobby/JoinRoomCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JoinRoomCard",
    ()=>JoinRoomCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bomb.mjs [app-client] (ecmascript) <export default as Bomb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.mjs [app-client] (ecmascript) <export default as Dices>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function JoinRoomCard({ onJoin, defaultRoomId = "", error }) {
    _s();
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultRoomId || "ARENA");
    const [playerName, setPlayerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleRandomRoom = ()=>{
        const code = "ROOM-" + Math.floor(1000 + Math.random() * 9000);
        setRoomId(code);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const finalName = playerName.trim() || `Bomber_${Math.floor(Math.random() * 100)}`;
        const finalRoom = (roomId.trim() || "ARENA").toUpperCase();
        onJoin(finalRoom, finalName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md bg-stone-900/90 border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-amber-500/10 rounded-2xl border border-amber-500/30 text-amber-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__["Bomb"], {
                            className: "w-8 h-8 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black uppercase text-stone-100 tracking-wider",
                                children: "Rejoindre l'Arène"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-stone-400",
                                children: "Jusqu'à 4 joueurs en réseau simultané"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        label: "Votre Pseudo",
                        placeholder: "Ex: MaxBomber",
                        value: playerName,
                        onChange: (e)=>setPlayerName(e.target.value),
                        maxLength: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    label: "Code du Salon",
                                    placeholder: "Ex: ARENA",
                                    value: roomId,
                                    onChange: (e)=>setRoomId(e.target.value.toUpperCase()),
                                    maxLength: 10
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                className: "mb-0.5 px-3 py-2.5 h-[46px]",
                                onClick: handleRandomRoom,
                                title: "Générer un code aléatoire",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-rose-950/50 border border-rose-800/80 rounded-xl text-rose-300 text-xs font-mono",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        variant: "primary",
                        size: "lg",
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-5 h-5 fill-current"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            "Entrer dans le Salon"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/lobby/JoinRoomCard.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(JoinRoomCard, "XKAAogBjkX+U69zYXg6f0yBrgLU=");
_c = JoinRoomCard;
var _c;
__turbopack_context__.k.register(_c, "JoinRoomCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/lobby/LobbyRoomView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LobbyRoomView",
    ()=>LobbyRoomView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$PlayerSlotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/lobby/PlayerSlotCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LobbyRoomView({ snapshot, currentPlayerId, onSetReady, onStartGame, onLeave }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const playersList = Object.values(snapshot.players);
    const me = currentPlayerId ? snapshot.players[currentPlayerId] : null;
    const isMeReady = me?.ready ?? false;
    const canStart = playersList.length >= 1;
    const handleCopyCode = ()=>{
        navigator.clipboard.writeText(snapshot.roomId);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl bg-stone-900/90 border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-widest text-amber-500 font-bold",
                                children: "Salon de Jeu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl font-black text-stone-100 font-mono tracking-wider",
                                        children: snapshot.roomId
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyCode,
                                        className: "p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors",
                                        title: "Copier le code de salon",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                            lineNumber: 50,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                            lineNumber: 50,
                                            columnNumber: 74
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "danger",
                            size: "sm",
                            onClick: onLeave,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                " Quitter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8",
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((slotIdx)=>{
                    const player = playersList.find((p)=>p.slot === slotIdx);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$lobby$2f$PlayerSlotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerSlotCard"], {
                        slotIndex: slotIdx,
                        player: player,
                        isCurrentPlayer: player?.id === currentPlayerId
                    }, slotIdx, false, {
                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-stone-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: isMeReady ? "outline" : "secondary",
                        onClick: ()=>onSetReady(!isMeReady),
                        className: "w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            isMeReady ? "Annuler Prêt" : "Marquer Prêt"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        size: "lg",
                        onClick: onStartGame,
                        disabled: !canStart,
                        className: "w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-5 h-5 fill-current"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            "Lancer la Partie"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/lobby/LobbyRoomView.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(LobbyRoomView, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = LobbyRoomView;
var _c;
__turbopack_context__.k.register(_c, "LobbyRoomView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/lobby/PlayerSlotCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerSlotCard",
    ()=>PlayerSlotCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
;
;
const SLOT_BG_CLASSES = [
    "bg-blue-600",
    "bg-red-600",
    "bg-green-600",
    "bg-yellow-500"
];
function PlayerSlotCard({ slotIndex, player, isCurrentPlayer }) {
    const bgClass = SLOT_BG_CLASSES[slotIndex] || "bg-stone-600";
    if (!player) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-stone-800 bg-stone-900/40 text-stone-600 min-h-[140px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-5 h-5 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-mono uppercase font-bold tracking-wider",
                    children: [
                        "Slot ",
                        slotIndex + 1
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-stone-600",
                    children: "En attente..."
                }, void 0, false, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all min-h-[140px] bg-stone-900/90 ${isCurrentPlayer ? "border-amber-500 shadow-lg shadow-amber-500/10" : "border-stone-800"}`,
        children: [
            isCurrentPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-3 px-2 py-0.5 bg-amber-500 text-stone-950 font-black text-[10px] rounded-full uppercase tracking-wider",
                children: "Vous"
            }, void 0, false, {
                fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center mb-2 relative ${bgClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-black text-xs font-mono",
                    children: slotIndex + 1
                }, void 0, false, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-bold text-stone-100 truncate max-w-[120px] mb-2 font-mono",
                children: player.name
            }, void 0, false, {
                fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: player.ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        " Prêt"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-400 text-[11px] font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        " En attente"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/lobby/PlayerSlotCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = PlayerSlotCard;
var _c;
__turbopack_context__.k.register(_c, "PlayerSlotCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, variant = "primary", size = "md", className = "", disabled, ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const sizeStyles = {
        sm: "px-3 py-1.5 text-xs gap-1.5",
        md: "px-5 py-2.5 text-sm gap-2",
        lg: "px-7 py-3.5 text-base gap-3"
    }[size];
    const variantStyles = {
        primary: "bg-amber-500 hover:bg-amber-400 text-stone-950 border-b-4 border-amber-700 active:border-b-0",
        secondary: "bg-stone-700 hover:bg-stone-600 text-stone-100 border-b-4 border-stone-900 active:border-b-0",
        danger: "bg-rose-600 hover:bg-rose-500 text-white border-b-4 border-rose-800 active:border-b-0",
        outline: "bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-600 active:border-stone-500"
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`,
        disabled: disabled,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Input({ label, error, className = "", id, ...props }) {
    const inputId = id || props.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5 w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "text-xs font-semibold uppercase tracking-wider text-stone-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: inputId,
                className: `w-full px-4 py-2.5 bg-stone-900 border-2 border-stone-700 rounded-xl text-stone-100 placeholder-stone-500 font-mono text-sm focus:outline-none focus:border-amber-500 transition-colors ${error ? "border-rose-500" : ""} ${className}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-rose-400 font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Input.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useGameControls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameControls",
    ()=>useGameControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const PUNCH_KEYS = [
    "KeyX",
    "KeyE",
    "ShiftLeft",
    "ShiftRight",
    "KeyK"
];
function useGameControls({ enabled, sendMessage }) {
    _s();
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const currentDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("idle");
    const resolveDirection = ()=>{
        const keys = activeKeys.current;
        if (keys.has("ArrowUp") || keys.has("KeyW") || keys.has("KeyZ")) return "up";
        if (keys.has("ArrowDown") || keys.has("KeyS")) return "down";
        if (keys.has("ArrowLeft") || keys.has("KeyA") || keys.has("KeyQ")) return "left";
        if (keys.has("ArrowRight") || keys.has("KeyD")) return "right";
        return "idle";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameControls.useEffect": ()=>{
            if (!enabled) return;
            const handleKeyDown = {
                "useGameControls.useEffect.handleKeyDown": (e)=>{
                    if ([
                        "Space",
                        "ArrowUp",
                        "ArrowDown",
                        "ArrowLeft",
                        "ArrowRight"
                    ].includes(e.code)) {
                        e.preventDefault();
                    }
                    if (e.code === "Space" && !e.repeat) {
                        sendMessage({
                            type: "plant_bomb"
                        });
                        return;
                    }
                    if (PUNCH_KEYS.includes(e.code) && !e.repeat) {
                        sendMessage({
                            type: "punch_bomb"
                        });
                        return;
                    }
                    activeKeys.current.add(e.code);
                    const newDir = resolveDirection();
                    if (newDir !== currentDir.current) {
                        currentDir.current = newDir;
                        if (newDir === "idle") {
                            sendMessage({
                                type: "stop_move"
                            });
                        } else {
                            sendMessage({
                                type: "move",
                                direction: newDir
                            });
                        }
                    }
                }
            }["useGameControls.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "useGameControls.useEffect.handleKeyUp": (e)=>{
                    activeKeys.current.delete(e.code);
                    const newDir = resolveDirection();
                    if (newDir !== currentDir.current) {
                        currentDir.current = newDir;
                        if (newDir === "idle") {
                            sendMessage({
                                type: "stop_move"
                            });
                        } else {
                            sendMessage({
                                type: "move",
                                direction: newDir
                            });
                        }
                    }
                }
            }["useGameControls.useEffect.handleKeyUp"];
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
            const keys = activeKeys.current;
            return ({
                "useGameControls.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    window.removeEventListener("keyup", handleKeyUp);
                    keys.clear();
                    currentDir.current = "idle";
                }
            })["useGameControls.useEffect"];
        }
    }["useGameControls.useEffect"], [
        enabled,
        sendMessage
    ]);
}
_s(useGameControls, "RQYAcz5MCR3WlN3uu1ncWFnEz74=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useGameSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameSocket",
    ()=>useGameSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/audio.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useGameSocket() {
    _s();
    const [snapshot, setSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [myPlayerId, setMyPlayerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mySlot, setMySlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[sendMessage]": (msg)=>{
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify(msg));
            }
        }
    }["useGameSocket.useCallback[sendMessage]"], []);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[connect]": (serverUrl, roomId, playerName)=>{
            if (wsRef.current) {
                wsRef.current.close();
            }
            setErrorMsg(null);
            const ws = new WebSocket(serverUrl);
            wsRef.current = ws;
            ws.onopen = ({
                "useGameSocket.useCallback[connect]": ()=>{
                    setIsConnected(true);
                    sendMessage({
                        type: "join_room",
                        roomId,
                        playerName
                    });
                }
            })["useGameSocket.useCallback[connect]"];
            ws.onmessage = ({
                "useGameSocket.useCallback[connect]": (event)=>{
                    try {
                        const msg = JSON.parse(event.data);
                        if (msg.type === "joined") {
                            setMyPlayerId(msg.playerId);
                            setMySlot(msg.slot);
                        } else if (msg.type === "room_state") {
                            setSnapshot(msg.snapshot);
                        } else if (msg.type === "sound") {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["soundManager"].playSound(msg.sound);
                        } else if (msg.type === "error") {
                            setErrorMsg(msg.message);
                        }
                    } catch  {
                    // Ignorer paquet invalide
                    }
                }
            })["useGameSocket.useCallback[connect]"];
            ws.onerror = ({
                "useGameSocket.useCallback[connect]": ()=>{
                    setErrorMsg("Impossible de joindre le serveur WebSocket de jeu.");
                }
            })["useGameSocket.useCallback[connect]"];
            ws.onclose = ({
                "useGameSocket.useCallback[connect]": ()=>{
                    setIsConnected(false);
                }
            })["useGameSocket.useCallback[connect]"];
        }
    }["useGameSocket.useCallback[connect]"], [
        sendMessage
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameSocket.useCallback[disconnect]": ()=>{
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
            }
            setIsConnected(false);
            setSnapshot(null);
            setMyPlayerId(null);
        }
    }["useGameSocket.useCallback[disconnect]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameSocket.useEffect": ()=>{
            return ({
                "useGameSocket.useEffect": ()=>{
                    if (wsRef.current) {
                        wsRef.current.close();
                    }
                }
            })["useGameSocket.useEffect"];
        }
    }["useGameSocket.useEffect"], []);
    return {
        snapshot,
        myPlayerId,
        mySlot,
        isConnected,
        errorMsg,
        connect,
        disconnect,
        sendMessage
    };
}
_s(useGameSocket, "9nj4I3yCb66yn8+U7dsPgdO35GE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/game/audio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "soundManager",
    ()=>soundManager
]);
class AudioManager {
    ctx = null;
    isMuted = false;
    initCtx() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx.state === "suspended") this.ctx.resume();
        return this.ctx;
    }
    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
    playTone(type, startF, endF, dur, vol = 0.25) {
        if (this.isMuted) return;
        const ctx = this.initCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(startF, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endF, ctx.currentTime + dur);
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + dur);
    }
    playPlant() {
        this.playTone("sine", 320, 120, 0.12, 0.2);
    }
    playKick() {
        this.playTone("sine", 150, 300, 0.09, 0.25);
    }
    playPunch() {
        this.playTone("triangle", 200, 550, 0.18, 0.3);
    }
    playDeath() {
        this.playTone("sawtooth", 300, 60, 0.35, 0.25);
    }
    playExplosion() {
        if (this.isMuted) return;
        const ctx = this.initCtx();
        if (!ctx) return;
        const bufferSize = ctx.sampleRate * 0.35;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for(let i = 0; i < bufferSize; i++)data[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
    }
    playPowerUp() {
        if (this.isMuted) return;
        const ctx = this.initCtx();
        if (!ctx) return;
        [
            330,
            440,
            550,
            660
        ].forEach((freq, idx)=>{
            setTimeout(()=>this.playTone("triangle", freq, freq * 1.05, 0.08, 0.15), idx * 50);
        });
    }
    playMalus() {
        if (this.isMuted) return;
        const ctx = this.initCtx();
        if (!ctx) return;
        [
            400,
            300,
            200
        ].forEach((freq, idx)=>{
            setTimeout(()=>this.playTone("sawtooth", freq, freq * 0.8, 0.1, 0.18), idx * 70);
        });
    }
    playSound(type) {
        if (type === "plant") this.playPlant();
        else if (type === "explosion") this.playExplosion();
        else if (type === "powerup" || type === "victory") this.playPowerUp();
        else if (type === "malus") this.playMalus();
        else if (type === "kick") this.playKick();
        else if (type === "punch") this.playPunch();
        else if (type === "death" || type === "gameover") this.playDeath();
    }
}
const soundManager = new AudioManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/game/canvasRenderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderGame",
    ()=>renderGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$renderEntities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/renderEntities.ts [app-client] (ecmascript)");
;
;
function drawTile(ctx, cell, x, y) {
    const px = x * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const py = y * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const isEven = (x + y) % 2 === 0;
    ctx.fillStyle = isEven ? "#22c55e" : "#16a34a";
    ctx.fillRect(px, py, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
    if (cell === 1) {
        ctx.fillStyle = "#475569";
        ctx.fillRect(px, py, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
        ctx.fillStyle = "#64748b";
        ctx.fillRect(px + 4, py + 4, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 8, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 8);
        ctx.strokeStyle = "#334155";
        ctx.strokeRect(px, py, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
    } else if (cell === 2) {
        ctx.fillStyle = "#b45309";
        ctx.fillRect(px + 2, py + 2, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 4, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 4);
        ctx.fillStyle = "#d97706";
        ctx.fillRect(px + 4, py + 4, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 8, (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 8) / 2);
        ctx.strokeStyle = "#78350f";
        ctx.lineWidth = 1;
        ctx.strokeRect(px + 2, py + 2, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 4, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] - 4);
    }
}
function drawFlames(ctx, flames, now) {
    for (const f of flames){
        const px = f.cellX * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
        const py = f.cellY * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
        const flicker = Math.sin(now * 0.03 + f.cellX * 10) * 3;
        const grad = ctx.createRadialGradient(px + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] / 2, py + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] / 2, 4, px + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] / 2, py + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] / 2, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] / 2 + flicker);
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.3, "#facc15");
        grad.addColorStop(0.7, "#ea580c");
        grad.addColorStop(1, "rgba(220, 38, 38, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(px, py, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
    }
}
function renderGame(canvas, snapshot, currentPlayerId) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const now = performance.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 1. Grille de fond et blocs
    for(let y = 0; y < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROWS"]; y++){
        for(let x = 0; x < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_COLS"]; x++){
            const cell = snapshot.grid[y]?.[x] ?? 0;
            drawTile(ctx, cell, x, y);
        }
    }
    // 2. Bombes
    for (const bomb of snapshot.bombs){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$renderEntities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawBomb"])(ctx, bomb, now);
    }
    // 3. Flammes d'explosions
    drawFlames(ctx, snapshot.flames, now);
    // 4. Power-ups (au-dessus des flammes pour une visibilité immédiate)
    for (const item of snapshot.powerUps){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$renderEntities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPowerUp"])(ctx, item, now);
    }
    // 5. Joueurs
    for (const player of Object.values(snapshot.players)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$renderEntities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPlayer"])(ctx, player, player.id === currentPlayerId);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/game/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_PLAYER_SPEED",
    ()=>BASE_PLAYER_SPEED,
    "BOMB_FUSE_MS",
    ()=>BOMB_FUSE_MS,
    "BOMB_SLIDE_SPEED",
    ()=>BOMB_SLIDE_SPEED,
    "CORNER_SAFE_ZONES",
    ()=>CORNER_SAFE_ZONES,
    "FLAME_DURATION_MS",
    ()=>FLAME_DURATION_MS,
    "GRID_COLS",
    ()=>GRID_COLS,
    "GRID_ROWS",
    ()=>GRID_ROWS,
    "MAX_BOMBS",
    ()=>MAX_BOMBS,
    "MAX_FLAME_RADIUS",
    ()=>MAX_FLAME_RADIUS,
    "MAX_PLAYERS",
    ()=>MAX_PLAYERS,
    "MAX_SPEED",
    ()=>MAX_SPEED,
    "MIN_FLAME_RADIUS",
    ()=>MIN_FLAME_RADIUS,
    "MIN_SPEED",
    ()=>MIN_SPEED,
    "PLAYER_SLOTS",
    ()=>PLAYER_SLOTS,
    "PUNCH_JUMP_CELLS",
    ()=>PUNCH_JUMP_CELLS,
    "PUNCH_JUMP_DURATION_MS",
    ()=>PUNCH_JUMP_DURATION_MS,
    "SERVER_TICK_MS",
    ()=>SERVER_TICK_MS,
    "SERVER_TICK_RATE",
    ()=>SERVER_TICK_RATE,
    "SPEED_BONUS",
    ()=>SPEED_BONUS,
    "SPEED_PENALTY",
    ()=>SPEED_PENALTY,
    "TILE_SIZE",
    ()=>TILE_SIZE
]);
const GRID_COLS = 15;
const GRID_ROWS = 13;
const TILE_SIZE = 48;
const SERVER_TICK_RATE = 30; // 30 fps
const SERVER_TICK_MS = 1000 / SERVER_TICK_RATE;
const BOMB_FUSE_MS = 2500;
const FLAME_DURATION_MS = 600;
const BASE_PLAYER_SPEED = 3.6;
const SPEED_BONUS = 0.5;
const SPEED_PENALTY = 0.7;
const MIN_SPEED = 1.8;
const MAX_SPEED = 6.0;
const MIN_FLAME_RADIUS = 1;
const MAX_FLAME_RADIUS = 8;
const MAX_BOMBS = 8;
const BOMB_SLIDE_SPEED = 8.0; // cases par seconde pour la glisse
const PUNCH_JUMP_CELLS = 3; // distance de saut de bombe
const PUNCH_JUMP_DURATION_MS = 450; // durée de vol
const MAX_PLAYERS = 4;
const PLAYER_SLOTS = [
    {
        name: "Bleu",
        color: "#2563eb",
        accentColor: "#60a5fa",
        glowColor: "rgba(37, 99, 235, 0.4)",
        spawnCol: 1,
        spawnRow: 1
    },
    {
        name: "Rouge",
        color: "#dc2626",
        accentColor: "#f87171",
        glowColor: "rgba(220, 38, 38, 0.4)",
        spawnCol: 13,
        spawnRow: 11
    },
    {
        name: "Vert",
        color: "#16a34a",
        accentColor: "#4ade80",
        glowColor: "rgba(22, 163, 74, 0.4)",
        spawnCol: 13,
        spawnRow: 1
    },
    {
        name: "Jaune",
        color: "#ca8a04",
        accentColor: "#facc15",
        glowColor: "rgba(220, 180, 4, 0.4)",
        spawnCol: 1,
        spawnRow: 11
    }
];
const CORNER_SAFE_ZONES = [
    [
        1,
        1
    ],
    [
        1,
        2
    ],
    [
        2,
        1
    ],
    [
        13,
        11
    ],
    [
        13,
        10
    ],
    [
        12,
        11
    ],
    [
        13,
        1
    ],
    [
        13,
        2
    ],
    [
        12,
        1
    ],
    [
        1,
        11
    ],
    [
        1,
        10
    ],
    [
        2,
        11
    ]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/game/renderEntities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawBomb",
    ()=>drawBomb,
    "drawPlayer",
    ()=>drawPlayer,
    "drawPowerUp",
    ()=>drawPowerUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/constants.ts [app-client] (ecmascript)");
;
function drawBomb(ctx, bomb, now) {
    let cx = (bomb.cellX + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    let cy = (bomb.cellY + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    let altitude = 0;
    if (bomb.flying) {
        const p = Math.min(1, Math.max(0, bomb.flying.progress));
        const curX = bomb.flying.startX + (bomb.flying.targetX - bomb.flying.startX) * p;
        const curY = bomb.flying.startY + (bomb.flying.targetY - bomb.flying.startY) * p;
        cx = (curX + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
        cy = (curY + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
        altitude = Math.sin(p * Math.PI) * 48; // saut en cloche par-dessus les murs
    }
    const pulse = Math.sin(now * 0.015) * 2;
    const radius = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] * 0.38 + pulse;
    // Ombre projetée au sol
    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.beginPath();
    ctx.ellipse(cx, cy + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] * 0.35, radius * 0.9, radius * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    // Corps de la bombe (décalé vers le haut par l'altitude)
    const renderY = cy - altitude;
    const grad = ctx.createRadialGradient(cx - radius * 0.3, renderY - radius * 0.3, radius * 0.1, cx, renderY, radius);
    grad.addColorStop(0, "#64748b");
    grad.addColorStop(0.7, "#0f172a");
    grad.addColorStop(1, "#020617");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, renderY, radius, 0, Math.PI * 2);
    ctx.fill();
    // Mèche et étincelle
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(cx - 3, renderY - radius - 3, 6, 4);
    const sparkColors = [
        "#fbbf24",
        "#f97316",
        "#ef4444"
    ];
    const sparkColor = sparkColors[Math.floor(now / 80) % sparkColors.length];
    ctx.fillStyle = sparkColor;
    ctx.beginPath();
    ctx.arc(cx, renderY - radius - 5, 3 + Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
}
function drawPlayer(ctx, player, isCurrent) {
    if (!player.alive) return;
    const cx = player.x * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const cy = player.y * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const slotConf = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_SLOTS"][player.slot] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_SLOTS"][0];
    const radius = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"] * 0.36;
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius * 0.9, radius * 0.85, radius * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    if (isCurrent) {
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2;
        ctx.setLineDash([
            4,
            4
        ]);
        ctx.beginPath();
        ctx.arc(cx, cy, radius + 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    ctx.fillStyle = slotConf.color;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 2, radius * 0.65, radius * 0.42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(cx - 4, cy - 2, 2.5, 0, Math.PI * 2);
    ctx.arc(cx + 4, cy - 2, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = slotConf.accentColor;
    ctx.beginPath();
    ctx.arc(cx, cy - radius - 3, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "center";
    ctx.fillText(player.name.substring(0, 10), cx, cy - radius - 8);
}
const POWERUP_ICONS = {
    flame: "🔥",
    bomb: "💣",
    speed: "⚡",
    kick: "👟",
    punch: "🥊",
    slow: "🐢",
    skull: "💀"
};
function drawPowerUp(ctx, item, now) {
    const cx = (item.cellX + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const cy = (item.cellY + 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_SIZE"];
    const bob = Math.sin(now * 0.008 + item.cellX) * 3;
    const isMalus = item.type === "slow" || item.type === "skull";
    ctx.fillStyle = isMalus ? "#3b0764" : "#1e293b";
    ctx.beginPath();
    ctx.roundRect(cx - 16, cy - 16 + bob, 32, 32, 6);
    ctx.fill();
    ctx.strokeStyle = isMalus ? "#a855f7" : "#f59e0b";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(POWERUP_ICONS[item.type] || "❓", cx, cy + bob);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1dy7ndk._.js.map