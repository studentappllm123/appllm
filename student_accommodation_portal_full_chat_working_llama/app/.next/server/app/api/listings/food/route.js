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
exports.id = "app/api/listings/food/route";
exports.ids = ["app/api/listings/food/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Ffood%2Froute&page=%2Fapi%2Flistings%2Ffood%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Ffood%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Ffood%2Froute&page=%2Fapi%2Flistings%2Ffood%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Ffood%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_VM_IMAGES_student_accommodation_portal_student_accommodation_portal_full_chat_working_llama_app_app_api_listings_food_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/listings/food/route.ts */ \"(rsc)/./app/api/listings/food/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/listings/food/route\",\n        pathname: \"/api/listings/food\",\n        filename: \"route\",\n        bundlePath: \"app/api/listings/food/route\"\n    },\n    resolvedPagePath: \"D:\\\\VM_IMAGES\\\\student_accommodation_portal\\\\student_accommodation_portal_full_chat_working_llama\\\\app\\\\app\\\\api\\\\listings\\\\food\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_VM_IMAGES_student_accommodation_portal_student_accommodation_portal_full_chat_working_llama_app_app_api_listings_food_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/listings/food/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXN0aW5ncyUyRmZvb2QlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpc3RpbmdzJTJGZm9vZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpc3RpbmdzJTJGZm9vZCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDVk1fSU1BR0VTJTVDc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbCU1Q3N0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxfZnVsbF9jaGF0X3dvcmtpbmdfbGxhbWElNUNhcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNWTV9JTUFHRVMlNUNzdHVkZW50X2FjY29tbW9kYXRpb25fcG9ydGFsJTVDc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbF9mdWxsX2NoYXRfd29ya2luZ19sbGFtYSU1Q2FwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEY7QUFDdks7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvPzFhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcVk1fSU1BR0VTXFxcXHN0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxcXFxcc3R1ZGVudF9hY2NvbW1vZGF0aW9uX3BvcnRhbF9mdWxsX2NoYXRfd29ya2luZ19sbGFtYVxcXFxhcHBcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxmb29kXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saXN0aW5ncy9mb29kL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGlzdGluZ3MvZm9vZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGlzdGluZ3MvZm9vZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFZNX0lNQUdFU1xcXFxzdHVkZW50X2FjY29tbW9kYXRpb25fcG9ydGFsXFxcXHN0dWRlbnRfYWNjb21tb2RhdGlvbl9wb3J0YWxfZnVsbF9jaGF0X3dvcmtpbmdfbGxhbWFcXFxcYXBwXFxcXGFwcFxcXFxhcGlcXFxcbGlzdGluZ3NcXFxcZm9vZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGlzdGluZ3MvZm9vZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Ffood%2Froute&page=%2Fapi%2Flistings%2Ffood%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Ffood%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/listings/food/route.ts":
/*!****************************************!*\
  !*** ./app/api/listings/food/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const serviceType = searchParams.get(\"serviceType\");\n        const priceRange = searchParams.get(\"priceRange\");\n        const cuisineType = searchParams.get(\"cuisineType\");\n        const vegOptions = searchParams.get(\"vegOptions\");\n        const deliveryAvailable = searchParams.get(\"deliveryAvailable\");\n        let whereCondition = {};\n        if (serviceType && serviceType !== \"all\") {\n            whereCondition.serviceType = serviceType;\n        }\n        if (priceRange && priceRange !== \"all\") {\n            whereCondition.priceRange = priceRange;\n        }\n        if (cuisineType) {\n            const cuisineList = cuisineType.split(\",\");\n            whereCondition.cuisineType = {\n                hasEvery: cuisineList\n            };\n        }\n        if (vegOptions === \"true\") {\n            whereCondition.vegOptions = true;\n        }\n        if (deliveryAvailable === \"true\") {\n            whereCondition.deliveryAvailable = true;\n        }\n        const foodServices = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.foodServiceListing.findMany({\n            where: whereCondition,\n            include: {\n                owner: {\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true,\n                        phone: true\n                    }\n                },\n                reviews: {\n                    include: {\n                        user: {\n                            select: {\n                                name: true\n                            }\n                        }\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            foodServices\n        });\n    } catch (error) {\n        console.error(\"Error fetching food services:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Authentication required\"\n            }, {\n                status: 401\n            });\n        }\n        const userType = session.user?.userType;\n        if (userType !== \"PROPERTY_OWNER\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Only property owners can create listings\"\n            }, {\n                status: 403\n            });\n        }\n        const body = await request.json();\n        const { serviceName, photos, serviceType, priceRange, menuDetails, cuisineType, vegOptions, nonVegOptions, address, latitude, longitude, contactInfo, description, operatingHours, deliveryAvailable } = body;\n        const foodService = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.foodServiceListing.create({\n            data: {\n                serviceName,\n                photos: photos || [],\n                serviceType,\n                priceRange,\n                menuDetails,\n                cuisineType: cuisineType || [],\n                vegOptions: Boolean(vegOptions),\n                nonVegOptions: Boolean(nonVegOptions),\n                address,\n                latitude: latitude ? parseFloat(latitude) : null,\n                longitude: longitude ? parseFloat(longitude) : null,\n                contactInfo,\n                description,\n                operatingHours,\n                deliveryAvailable: Boolean(deliveryAvailable),\n                ownerId: session.user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            foodService,\n            message: \"Food service listing created successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating food service listing:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDaUMsTUFBTSxDQUFDO1lBQ3pEQyxNQUFNO2dCQUNKWjtnQkFDQUMsUUFBUUEsVUFBVSxFQUFFO2dCQUNwQmxDO2dCQUNBRTtnQkFDQWlDO2dCQUNBaEMsYUFBYUEsZUFBZSxFQUFFO2dCQUM5QkMsWUFBWTBDLFFBQVExQztnQkFDcEJnQyxlQUFlVSxRQUFRVjtnQkFDdkJDO2dCQUNBQyxVQUFVQSxXQUFXUyxXQUFXVCxZQUFZO2dCQUM1Q0MsV0FBV0EsWUFBWVEsV0FBV1IsYUFBYTtnQkFDL0NDO2dCQUNBQztnQkFDQUM7Z0JBQ0FyQyxtQkFBbUJ5QyxRQUFRekM7Z0JBQzNCMkMsU0FBUyxRQUFTMUIsSUFBSSxDQUFTTCxFQUFFO1lBQ25DO1FBQ0Y7UUFFQSxPQUFPMUIscURBQVlBLENBQUNrQyxJQUFJLENBQ3RCO1lBQUVrQjtZQUFhTSxTQUFTO1FBQTRDLEdBQ3BFO1lBQUVyQixRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPRixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3Q0FBd0NBO1FBQ3RELE9BQU9uQyxxREFBWUEsQ0FBQ2tDLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2FwcC9hcGkvbGlzdGluZ3MvZm9vZC9yb3V0ZS50cz8wOTQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgY29uc3QgZHluYW1pYyA9IFwiZm9yY2UtZHluYW1pY1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IHNlcnZpY2VUeXBlID0gc2VhcmNoUGFyYW1zLmdldCgnc2VydmljZVR5cGUnKTtcbiAgICBjb25zdCBwcmljZVJhbmdlID0gc2VhcmNoUGFyYW1zLmdldCgncHJpY2VSYW5nZScpO1xuICAgIGNvbnN0IGN1aXNpbmVUeXBlID0gc2VhcmNoUGFyYW1zLmdldCgnY3Vpc2luZVR5cGUnKTtcbiAgICBjb25zdCB2ZWdPcHRpb25zID0gc2VhcmNoUGFyYW1zLmdldCgndmVnT3B0aW9ucycpO1xuICAgIGNvbnN0IGRlbGl2ZXJ5QXZhaWxhYmxlID0gc2VhcmNoUGFyYW1zLmdldCgnZGVsaXZlcnlBdmFpbGFibGUnKTtcblxuICAgIGxldCB3aGVyZUNvbmRpdGlvbjogYW55ID0ge307XG5cbiAgICBpZiAoc2VydmljZVR5cGUgJiYgc2VydmljZVR5cGUgIT09ICdhbGwnKSB7XG4gICAgICB3aGVyZUNvbmRpdGlvbi5zZXJ2aWNlVHlwZSA9IHNlcnZpY2VUeXBlO1xuICAgIH1cblxuICAgIGlmIChwcmljZVJhbmdlICYmIHByaWNlUmFuZ2UgIT09ICdhbGwnKSB7XG4gICAgICB3aGVyZUNvbmRpdGlvbi5wcmljZVJhbmdlID0gcHJpY2VSYW5nZTtcbiAgICB9XG5cbiAgICBpZiAoY3Vpc2luZVR5cGUpIHtcbiAgICAgIGNvbnN0IGN1aXNpbmVMaXN0ID0gY3Vpc2luZVR5cGUuc3BsaXQoJywnKTtcbiAgICAgIHdoZXJlQ29uZGl0aW9uLmN1aXNpbmVUeXBlID0ge1xuICAgICAgICBoYXNFdmVyeTogY3Vpc2luZUxpc3RcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHZlZ09wdGlvbnMgPT09ICd0cnVlJykge1xuICAgICAgd2hlcmVDb25kaXRpb24udmVnT3B0aW9ucyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRlbGl2ZXJ5QXZhaWxhYmxlID09PSAndHJ1ZScpIHtcbiAgICAgIHdoZXJlQ29uZGl0aW9uLmRlbGl2ZXJ5QXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBmb29kU2VydmljZXMgPSBhd2FpdCBwcmlzbWEuZm9vZFNlcnZpY2VMaXN0aW5nLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB3aGVyZUNvbmRpdGlvbixcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgb3duZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgcGhvbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJldmlld3M6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGZvb2RTZXJ2aWNlcyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZm9vZCBzZXJ2aWNlczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xuICAgIFxuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJUeXBlID0gKHNlc3Npb24udXNlciBhcyBhbnkpPy51c2VyVHlwZTtcbiAgICBpZiAodXNlclR5cGUgIT09ICdQUk9QRVJUWV9PV05FUicpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJPbmx5IHByb3BlcnR5IG93bmVycyBjYW4gY3JlYXRlIGxpc3RpbmdzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7XG4gICAgICBzZXJ2aWNlTmFtZSxcbiAgICAgIHBob3RvcyxcbiAgICAgIHNlcnZpY2VUeXBlLFxuICAgICAgcHJpY2VSYW5nZSxcbiAgICAgIG1lbnVEZXRhaWxzLFxuICAgICAgY3Vpc2luZVR5cGUsXG4gICAgICB2ZWdPcHRpb25zLFxuICAgICAgbm9uVmVnT3B0aW9ucyxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBsYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZSxcbiAgICAgIGNvbnRhY3RJbmZvLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBvcGVyYXRpbmdIb3VycyxcbiAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlXG4gICAgfSA9IGJvZHk7XG5cbiAgICBjb25zdCBmb29kU2VydmljZSA9IGF3YWl0IHByaXNtYS5mb29kU2VydmljZUxpc3RpbmcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VydmljZU5hbWUsXG4gICAgICAgIHBob3RvczogcGhvdG9zIHx8IFtdLFxuICAgICAgICBzZXJ2aWNlVHlwZSxcbiAgICAgICAgcHJpY2VSYW5nZSxcbiAgICAgICAgbWVudURldGFpbHMsXG4gICAgICAgIGN1aXNpbmVUeXBlOiBjdWlzaW5lVHlwZSB8fCBbXSxcbiAgICAgICAgdmVnT3B0aW9uczogQm9vbGVhbih2ZWdPcHRpb25zKSxcbiAgICAgICAgbm9uVmVnT3B0aW9uczogQm9vbGVhbihub25WZWdPcHRpb25zKSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlID8gcGFyc2VGbG9hdChsYXRpdHVkZSkgOiBudWxsLFxuICAgICAgICBsb25naXR1ZGU6IGxvbmdpdHVkZSA/IHBhcnNlRmxvYXQobG9uZ2l0dWRlKSA6IG51bGwsXG4gICAgICAgIGNvbnRhY3RJbmZvLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgb3BlcmF0aW5nSG91cnMsXG4gICAgICAgIGRlbGl2ZXJ5QXZhaWxhYmxlOiBCb29sZWFuKGRlbGl2ZXJ5QXZhaWxhYmxlKSxcbiAgICAgICAgb3duZXJJZDogKHNlc3Npb24udXNlciBhcyBhbnkpLmlkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGZvb2RTZXJ2aWNlLCBtZXNzYWdlOiBcIkZvb2Qgc2VydmljZSBsaXN0aW5nIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGZvb2Qgc2VydmljZSBsaXN0aW5nOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJwcmlzbWEiLCJkeW5hbWljIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInNlcnZpY2VUeXBlIiwiZ2V0IiwicHJpY2VSYW5nZSIsImN1aXNpbmVUeXBlIiwidmVnT3B0aW9ucyIsImRlbGl2ZXJ5QXZhaWxhYmxlIiwid2hlcmVDb25kaXRpb24iLCJjdWlzaW5lTGlzdCIsInNwbGl0IiwiaGFzRXZlcnkiLCJmb29kU2VydmljZXMiLCJmb29kU2VydmljZUxpc3RpbmciLCJmaW5kTWFueSIsIndoZXJlIiwiaW5jbHVkZSIsIm93bmVyIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInJldmlld3MiLCJ1c2VyIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJQT1NUIiwic2Vzc2lvbiIsInVzZXJUeXBlIiwiYm9keSIsInNlcnZpY2VOYW1lIiwicGhvdG9zIiwibWVudURldGFpbHMiLCJub25WZWdPcHRpb25zIiwiYWRkcmVzcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29udGFjdEluZm8iLCJkZXNjcmlwdGlvbiIsIm9wZXJhdGluZ0hvdXJzIiwiZm9vZFNlcnZpY2UiLCJjcmVhdGUiLCJkYXRhIiwiQm9vbGVhbiIsInBhcnNlRmxvYXQiLCJvd25lcklkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/listings/food/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Ffood%2Froute&page=%2Fapi%2Flistings%2Ffood%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Ffood%2Froute.ts&appDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CVM_IMAGES%5Cstudent_accommodation_portal%5Cstudent_accommodation_portal_full_chat_working_llama%5Capp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();