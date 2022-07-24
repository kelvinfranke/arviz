(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("c0996419-fb10-4aed-9340-25b887d916bf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0996419-fb10-4aed-9340-25b887d916bf' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"da343803-10da-4df3-ac26-68564fd808a4":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"23403"},"glyph":{"id":"23402"},"group":null,"hover_glyph":null,"view":{"id":"23405"}},"id":"23404","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"23366"},0,0]]},"id":"23420","type":"GridBox"},{"attributes":{},"id":"23384","type":"PanTool"},{"attributes":{"source":{"id":"23403"}},"id":"23405","type":"CDSView"},{"attributes":{"overlay":{"id":"23392"}},"id":"23387","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23392","type":"PolyAnnotation"},{"attributes":{},"id":"23373","type":"LinearScale"},{"attributes":{},"id":"23413","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"23410"},"group":null,"major_label_policy":{"id":"23411"},"ticker":{"id":"23380"}},"id":"23379","type":"LinearAxis"},{"attributes":{"axis":{"id":"23375"},"coordinates":null,"group":null,"ticker":null},"id":"23378","type":"Grid"},{"attributes":{},"id":"23371","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"23413"},"group":null,"major_label_policy":{"id":"23414"},"ticker":{"id":"23376"}},"id":"23375","type":"LinearAxis"},{"attributes":{},"id":"23411","type":"AllLabels"},{"attributes":{},"id":"23415","type":"UnionRenderers"},{"attributes":{},"id":"23388","type":"UndoTool"},{"attributes":{},"id":"23380","type":"BasicTicker"},{"attributes":{"overlay":{"id":"23391"}},"id":"23385","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"23383"},{"id":"23384"},{"id":"23385"},{"id":"23386"},{"id":"23387"},{"id":"23388"},{"id":"23389"},{"id":"23390"}]},"id":"23393","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"23406","type":"Title"},{"attributes":{},"id":"23410","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"23379"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23382","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"23402","type":"Scatter"},{"attributes":{"below":[{"id":"23375"}],"center":[{"id":"23378"},{"id":"23382"}],"height":288,"left":[{"id":"23379"}],"output_backend":"webgl","renderers":[{"id":"23404"}],"title":{"id":"23406"},"toolbar":{"id":"23393"},"toolbar_location":null,"width":432,"x_range":{"id":"23367"},"x_scale":{"id":"23371"},"y_range":{"id":"23369"},"y_scale":{"id":"23373"}},"id":"23366","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23367","type":"DataRange1d"},{"attributes":{"callback":null},"id":"23390","type":"HoverTool"},{"attributes":{"toolbar":{"id":"23421"},"toolbar_location":"above"},"id":"23422","type":"ToolbarBox"},{"attributes":{},"id":"23414","type":"AllLabels"},{"attributes":{},"id":"23416","type":"Selection"},{"attributes":{"toolbars":[{"id":"23393"}],"tools":[{"id":"23383"},{"id":"23384"},{"id":"23385"},{"id":"23386"},{"id":"23387"},{"id":"23388"},{"id":"23389"},{"id":"23390"}]},"id":"23421","type":"ProxyToolbar"},{"attributes":{},"id":"23386","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23391","type":"BoxAnnotation"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"23416"},"selection_policy":{"id":"23415"}},"id":"23403","type":"ColumnDataSource"},{"attributes":{},"id":"23383","type":"ResetTool"},{"attributes":{"children":[{"id":"23422"},{"id":"23420"}]},"id":"23423","type":"Column"},{"attributes":{},"id":"23389","type":"SaveTool"},{"attributes":{},"id":"23376","type":"BasicTicker"},{"attributes":{},"id":"23369","type":"DataRange1d"}],"root_ids":["23423"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"da343803-10da-4df3-ac26-68564fd808a4","root_ids":["23423"],"roots":{"23423":"c0996419-fb10-4aed-9340-25b887d916bf"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();