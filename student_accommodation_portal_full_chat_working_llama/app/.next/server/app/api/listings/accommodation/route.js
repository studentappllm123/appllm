"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/listings/accommodation/route";
exports.ids = ["app/api/listings/accommodation/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Faccommodation%2Froute&page=%2Fapi%2Flistings%2Faccommodation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Faccommodation%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Faccommodation%2Froute&page=%2Fapi%2Flistings%2Faccommodation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Faccommodation%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_VM_IMAGES_student_accommodation_portal_student_accommodation_portal_full_chat_working_llama_app_app_api_listings_accommodation_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/listings/accommodation/route.ts */ \"(rsc)/./app/api/listings/accommodation/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/listings/accommodation/route\",\n        pathname: \"/api/listings/accommodation\",\n        filename: \"route\",\n        bundlePath: \"app/api/listings/accommodation/route\"\n    },\n    resolvedPagePath: \"D:\\\\VM_IMAGES\\\\student_accommodation_portal\\\\student_accommodation_portal_full_chat_working_llama\\\\app\\\\app\\\\api\\\\listings\\\\accommodation\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_VM_IMAGES_student_accommodation_portal_student_accommodation_portal_full_chat_working_llama_app_app_api_listings_accommodation_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/listings/accommodation/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXN0aW5ncyUyRmFjY29tbW9kYXRpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpc3RpbmdzJTJGYWNjb21tb2RhdGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpc3RpbmdzJTJGYWNjb21tb2RhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDVk1fSU1BR0VTJTVDc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbCU1Q3N0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxfZnVsbF9jaGF0X3dvcmtpbmdfbGxhbWElNUNhcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNWTV9JTUFHRVMlNUNzdHVkZW50X2FjY29tbW9kYXRpb25fcG9ydGFsJTVDc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbF9mdWxsX2NoYXRfd29ya2luZ19sbGFtYSU1Q2FwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUc7QUFDaEw7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvP2I0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcVk1fSU1BR0VTXFxcXHN0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxcXFxcc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbF9mdWxsX2NoYXRfd29ya2luZ19sbGFtYVxcXFxhcHBcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxhY2NvbW1vZGF0aW9uXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saXN0aW5ncy9hY2NvbW1vZGF0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGlzdGluZ3MvYWNjb21tb2RhdGlvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGlzdGluZ3MvYWNjb21tb2RhdGlvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFZNX0lNQUdFU1xcXFxzdHVkZW50X2FjY29tbW9kYXRpb25fcG9ydGFsXFxcXHN0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxfZnVsbF9jaGF0X3dvcmtpbmdfbGxhbWFcXFxcYXBwXFxcXGFwcFxcXFxhcGlcXFxcbGlzdGluZ3NcXFxcYWNjb21tb2RhdGlvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGlzdGluZ3MvYWNjb21tb2RhdGlvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Faccommodation%2Froute&page=%2Fapi%2Flistings%2Faccommodation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Faccommodation%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/listings/accommodation/route.ts":
/*!*************************************************!*\
  !*** ./app/api/listings/accommodation/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const university = searchParams.get(\"university\");\n        const minRent = searchParams.get(\"minRent\");\n        const maxRent = searchParams.get(\"maxRent\");\n        const roomType = searchParams.get(\"roomType\");\n        const accommodationType = searchParams.get(\"accommodationType\");\n        const amenities = searchParams.get(\"amenities\");\n        let whereCondition = {\n            availability: true\n        };\n        if (university) {\n            whereCondition.nearbyUniversities = {\n                has: university\n            };\n        }\n        if (minRent || maxRent) {\n            whereCondition.OR = [\n                {\n                    // For daily rate listings\n                    dailyRate: {\n                        gte: minRent ? parseInt(minRent) / 30 : undefined,\n                        lte: maxRent ? parseInt(maxRent) / 30 : undefined\n                    }\n                },\n                {\n                    // For monthly rate listings\n                    monthlyRent: {\n                        gte: minRent ? parseInt(minRent) : undefined,\n                        lte: maxRent ? parseInt(maxRent) : undefined\n                    }\n                }\n            ];\n        }\n        if (roomType && roomType !== \"all\") {\n            whereCondition.roomType = roomType;\n        }\n        if (accommodationType && accommodationType !== \"all\") {\n            whereCondition.accommodationType = accommodationType;\n        }\n        if (amenities) {\n            const amenityList = amenities.split(\",\");\n            whereCondition.amenities = {\n                hasEvery: amenityList\n            };\n        }\n        const accommodations = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.accommodationListing.findMany({\n            where: whereCondition,\n            include: {\n                owner: {\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true,\n                        phone: true\n                    }\n                },\n                reviews: {\n                    include: {\n                        user: {\n                            select: {\n                                name: true\n                            }\n                        }\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            accommodations\n        });\n    } catch (error) {\n        console.error(\"Error fetching accommodations:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Authentication required\"\n            }, {\n                status: 401\n            });\n        }\n        const userType = session.user?.userType;\n        if (userType !== \"PROPERTY_OWNER\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Only property owners can create listings\"\n            }, {\n                status: 403\n            });\n        }\n        const body = await request.json();\n        const { propertyName, photos, monthlyRent, deposit, amenities, roomType, accommodationType, livingPreferences, foodPreference, address, latitude, longitude, contactInfo, description, nearbyUniversities, distanceFromUni } = body;\n        const accommodation = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.accommodationListing.create({\n            data: {\n                propertyName,\n                photos: photos || [],\n                monthlyRent: parseInt(monthlyRent),\n                deposit: deposit ? parseInt(deposit) : null,\n                amenities: amenities || [],\n                roomType,\n                accommodationType,\n                livingPreferences: livingPreferences || [],\n                foodPreference,\n                address,\n                latitude: latitude ? parseFloat(latitude) : null,\n                longitude: longitude ? parseFloat(longitude) : null,\n                contactInfo,\n                description,\n                nearbyUniversities: nearbyUniversities || [],\n                distanceFromUni: distanceFromUni ? parseFloat(distanceFromUni) : null,\n                ownerId: session.user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            accommodation,\n            message: \"Accommodation listing created successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating accommodation listing:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xpc3RpbmdzL2FjY29tbW9kYXRpb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNYO0FBQ1g7QUFFM0IsTUFBTUcsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztRQUM1QyxNQUFNQyxhQUFhSCxhQUFhSSxHQUFHLENBQUM7UUFDcEMsTUFBTUMsVUFBVUwsYUFBYUksR0FBRyxDQUFDO1FBQ2pDLE1BQU1FLFVBQVVOLGFBQWFJLEdBQUcsQ0FBQztRQUNqQyxNQUFNRyxXQUFXUCxhQUFhSSxHQUFHLENBQUM7UUFDbEMsTUFBTUksb0JBQW9CUixhQUFhSSxHQUFHLENBQUM7UUFDM0MsTUFBTUssWUFBWVQsYUFBYUksR0FBRyxDQUFDO1FBRW5DLElBQUlNLGlCQUFzQjtZQUN4QkMsY0FBYztRQUNoQjtRQUVBLElBQUlSLFlBQVk7WUFDZE8sZUFBZUUsa0JBQWtCLEdBQUc7Z0JBQ2xDQyxLQUFLVjtZQUNQO1FBQ0Y7UUFFQSxJQUFJRSxXQUFXQyxTQUFTO1lBQ3RCSSxlQUFlSSxFQUFFLEdBQUc7Z0JBQ2xCO29CQUNFLDBCQUEwQjtvQkFDMUJDLFdBQVc7d0JBQ1RDLEtBQUtYLFVBQVVZLFNBQVNaLFdBQVcsS0FBS2E7d0JBQ3hDQyxLQUFLYixVQUFVVyxTQUFTWCxXQUFXLEtBQUtZO29CQUMxQztnQkFDRjtnQkFDQTtvQkFDRSw0QkFBNEI7b0JBQzVCRSxhQUFhO3dCQUNYSixLQUFLWCxVQUFVWSxTQUFTWixXQUFXYTt3QkFDbkNDLEtBQUtiLFVBQVVXLFNBQVNYLFdBQVdZO29CQUNyQztnQkFDRjthQUNEO1FBQ0g7UUFFQSxJQUFJWCxZQUFZQSxhQUFhLE9BQU87WUFDbENHLGVBQWVILFFBQVEsR0FBR0E7UUFDNUI7UUFFQSxJQUFJQyxxQkFBcUJBLHNCQUFzQixPQUFPO1lB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QXdCLEdBQ2pDO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXBwL2FwaS9saXN0aW5ncy9hY2NvbW1vZGF0aW9uL3JvdXRlLnRzP2IyZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL2RiXCI7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgY29uc3QgdW5pdmVyc2l0eSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3VuaXZlcnNpdHknKTtcbiAgICBjb25zdCBtaW5SZW50ID0gc2VhcmNoUGFyYW1zLmdldCgnbWluUmVudCcpO1xuICAgIGNvbnN0IG1heFJlbnQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdtYXhSZW50Jyk7XG4gICAgY29uc3Qgcm9vbVR5cGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdyb29tVHlwZScpO1xuICAgIGNvbnN0IGFjY29tbW9kYXRpb25UeXBlID0gc2VhcmNoUGFyYW1zLmdldCgnYWNjb21tb2RhdGlvblR5cGUnKTtcbiAgICBjb25zdCBhbWVuaXRpZXMgPSBzZWFyY2hQYXJhbXMuZ2V0KCdhbWVuaXRpZXMnKTtcblxuICAgIGxldCB3aGVyZUNvbmRpdGlvbjogYW55ID0ge1xuICAgICAgYXZhaWxhYmlsaXR5OiB0cnVlXG4gICAgfTtcblxuICAgIGlmICh1bml2ZXJzaXR5KSB7XG4gICAgICB3aGVyZUNvbmRpdGlvbi5uZWFyYnlVbml2ZXJzaXRpZXMgPSB7XG4gICAgICAgIGhhczogdW5pdmVyc2l0eVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAobWluUmVudCB8fCBtYXhSZW50KSB7XG4gICAgICB3aGVyZUNvbmRpdGlvbi5PUiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZvciBkYWlseSByYXRlIGxpc3RpbmdzXG4gICAgICAgICAgZGFpbHlSYXRlOiB7XG4gICAgICAgICAgICBndGU6IG1pblJlbnQgPyBwYXJzZUludChtaW5SZW50KSAvIDMwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbHRlOiBtYXhSZW50ID8gcGFyc2VJbnQobWF4UmVudCkgLyAzMCA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZvciBtb250aGx5IHJhdGUgbGlzdGluZ3NcbiAgICAgICAgICBtb250aGx5UmVudDoge1xuICAgICAgICAgICAgZ3RlOiBtaW5SZW50ID8gcGFyc2VJbnQobWluUmVudCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsdGU6IG1heFJlbnQgPyBwYXJzZUludChtYXhSZW50KSA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG5cbiAgICBpZiAocm9vbVR5cGUgJiYgcm9vbVR5cGUgIT09ICdhbGwnKSB7XG4gICAgICB3aGVyZUNvbmRpdGlvbi5yb29tVHlwZSA9IHJvb21UeXBlO1xuICAgIH1cblxuICAgIGlmIChhY2NvbW1vZGF0aW9uVHlwZSAmJiBhY2NvbW1vZGF0aW9uVHlwZSAhPT0gJ2FsbCcpIHtcbiAgICAgIHdoZXJlQ29uZGl0aW9uLmFjY29tbW9kYXRpb25UeXBlID0gYWNjb21tb2RhdGlvblR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGFtZW5pdGllcykge1xuICAgICAgY29uc3QgYW1lbml0eUxpc3QgPSBhbWVuaXRpZXMuc3BsaXQoJywnKTtcbiAgICAgIHdoZXJlQ29uZGl0aW9uLmFtZW5pdGllcyA9IHtcbiAgICAgICAgaGFzRXZlcnk6IGFtZW5pdHlMaXN0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFjY29tbW9kYXRpb25zID0gYXdhaXQgcHJpc21hLmFjY29tbW9kYXRpb25MaXN0aW5nLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB3aGVyZUNvbmRpdGlvbixcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgb3duZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgcGhvbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJldmlld3M6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGFjY29tbW9kYXRpb25zIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhY2NvbW1vZGF0aW9uczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xuICAgIFxuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJUeXBlID0gKHNlc3Npb24udXNlciBhcyBhbnkpPy51c2VyVHlwZTtcbiAgICBpZiAodXNlclR5cGUgIT09ICdQUk9QRVJUWV9PV05FUicpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJPbmx5IHByb3BlcnR5IG93bmVycyBjYW4gY3JlYXRlIGxpc3RpbmdzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wZXJ0eU5hbWUsXG4gICAgICBwaG90b3MsXG4gICAgICBtb250aGx5UmVudCxcbiAgICAgIGRlcG9zaXQsXG4gICAgICBhbWVuaXRpZXMsXG4gICAgICByb29tVHlwZSxcbiAgICAgIGFjY29tbW9kYXRpb25UeXBlLFxuICAgICAgbGl2aW5nUHJlZmVyZW5jZXMsXG4gICAgICBmb29kUHJlZmVyZW5jZSxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBsYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZSxcbiAgICAgIGNvbnRhY3RJbmZvLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBuZWFyYnlVbml2ZXJzaXRpZXMsXG4gICAgICBkaXN0YW5jZUZyb21VbmlcbiAgICB9ID0gYm9keTtcblxuICAgIGNvbnN0IGFjY29tbW9kYXRpb24gPSBhd2FpdCBwcmlzbWEuYWNjb21tb2RhdGlvbkxpc3RpbmcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgICBwaG90b3M6IHBob3RvcyB8fCBbXSxcbiAgICAgICAgbW9udGhseVJlbnQ6IHBhcnNlSW50KG1vbnRobHlSZW50KSxcbiAgICAgICAgZGVwb3NpdDogZGVwb3NpdCA/IHBhcnNlSW50KGRlcG9zaXQpIDogbnVsbCxcbiAgICAgICAgYW1lbml0aWVzOiBhbWVuaXRpZXMgfHwgW10sXG4gICAgICAgIHJvb21UeXBlLFxuICAgICAgICBhY2NvbW1vZGF0aW9uVHlwZSxcbiAgICAgICAgbGl2aW5nUHJlZmVyZW5jZXM6IGxpdmluZ1ByZWZlcmVuY2VzIHx8IFtdLFxuICAgICAgICBmb29kUHJlZmVyZW5jZSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlID8gcGFyc2VGbG9hdChsYXRpdHVkZSkgOiBudWxsLFxuICAgICAgICBsb25naXR1ZGU6IGxvbmdpdHVkZSA/IHBhcnNlRmxvYXQobG9uZ2l0dWRlKSA6IG51bGwsXG4gICAgICAgIGNvbnRhY3RJbmZvLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbmVhcmJ5VW5pdmVyc2l0aWVzOiBuZWFyYnlVbml2ZXJzaXRpZXMgfHwgW10sXG4gICAgICAgIGRpc3RhbmNlRnJvbVVuaTogZGlzdGFuY2VGcm9tVW5pID8gcGFyc2VGbG9hdChkaXN0YW5jZUZyb21VbmkpIDogbnVsbCxcbiAgICAgICAgb3duZXJJZDogKHNlc3Npb24udXNlciBhcyBhbnkpLmlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGFjY29tbW9kYXRpb24sIG1lc3NhZ2U6IFwiQWNjb21tb2RhdGlvbiBsaXN0aW5nIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGFjY29tbW9kYXRpb24gbGlzdGluZzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwicHJpc21hIiwiZHluYW1pYyIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJ1bml2ZXJzaXR5IiwiZ2V0IiwibWluUmVudCIsIm1heFJlbnQiLCJyb29tVHlwZSIsImFjY29tbW9kYXRpb25UeXBlIiwiYW1lbml0aWVzIiwid2hlcmVDb25kaXRpb24iLCJhdmFpbGFiaWxpdHkiLCJuZWFyYnlVbml2ZXJzaXRpZXMiLCJoYXMiLCJPUiIsImRhaWx5UmF0ZSIsImd0ZSIsInBhcnNlSW50IiwidW5kZWZpbmVkIiwibHRlIiwibW9udGhseVJlbnQiLCJhbWVuaXR5TGlzdCIsInNwbGl0IiwiaGFzRXZlcnkiLCJhY2NvbW1vZGF0aW9ucyIsImFjY29tbW9kYXRpb25MaXN0aW5nIiwiZmluZE1hbnkiLCJ3aGVyZSIsImluY2x1ZGUiLCJvd25lciIsInNlbGVjdCIsImlkIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJyZXZpZXdzIiwidXNlciIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsInNlc3Npb24iLCJ1c2VyVHlwZSIsImJvZHkiLCJwcm9wZXJ0eU5hbWUiLCJwaG90b3MiLCJkZXBvc2l0IiwibGl2aW5nUHJlZmVyZW5jZXMiLCJmb29kUHJlZmVyZW5jZSIsImFkZHJlc3MiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnRhY3RJbmZvIiwiZGVzY3JpcHRpb24iLCJkaXN0YW5jZUZyb21VbmkiLCJhY2NvbW1vZGF0aW9uIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlRmxvYXQiLCJvd25lcklkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/listings/accommodation/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLGtCQUFrQkM7QUFJakIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUU7QUFFbEUsSUFBSUksSUFBeUIsRUFBY0gsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Faccommodation%2Froute&page=%2Fapi%2Flistings%2Faccommodation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Faccommodation%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();