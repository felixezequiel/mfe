
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/zustand_mfe__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/zustand_mfe__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "react-router-dom": async () => {
          let pkg = await import("__mf__virtual/zustand_mfe__prebuild__react_mf_2_router_mf_2_dom__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "zustand_mfe",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.0"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "zustand_mfe",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.0"
            }
          }
        ,
          "react-router-dom": {
            name: "react-router-dom",
            version: "6.30.1",
            scope: ["default"],
            loaded: false,
            from: "zustand_mfe",
            async get () {
              usedShared["react-router-dom"].loaded = true
              const {"react-router-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^6.30.1"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      