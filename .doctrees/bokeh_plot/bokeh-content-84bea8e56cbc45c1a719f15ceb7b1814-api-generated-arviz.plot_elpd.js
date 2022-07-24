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
    
    
    const element = document.getElementById("5da28f0a-0ba2-4f90-b970-cdd8972a45ac");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5da28f0a-0ba2-4f90-b970-cdd8972a45ac' but no matching script tag was found.")
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
                  const docs_json = '{"f86ad8aa-2283-4e79-a894-5dfe162a3971":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"formatter":{"id":"20133"},"group":null,"major_label_policy":{"id":"20134"},"ticker":{"id":"20096"}},"id":"20095","type":"LinearAxis"},{"attributes":{},"id":"20135","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20110","type":"HoverTool"},{"attributes":{},"id":"20133","type":"BasicTickFormatter"},{"attributes":{},"id":"20096","type":"BasicTicker"},{"attributes":{"overlay":{"id":"20112"}},"id":"20107","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20122","type":"Scatter"},{"attributes":{},"id":"20093","type":"LinearScale"},{"attributes":{},"id":"20136","type":"Selection"},{"attributes":{"overlay":{"id":"20111"}},"id":"20105","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"20126","type":"Title"},{"attributes":{"tools":[{"id":"20103"},{"id":"20104"},{"id":"20105"},{"id":"20106"},{"id":"20107"},{"id":"20108"},{"id":"20109"},{"id":"20110"}]},"id":"20113","type":"Toolbar"},{"attributes":{"children":[[{"id":"20086"},0,0]]},"id":"20140","type":"GridBox"},{"attributes":{},"id":"20131","type":"AllLabels"},{"attributes":{},"id":"20103","type":"ResetTool"},{"attributes":{"axis":{"id":"20099"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20102","type":"Grid"},{"attributes":{},"id":"20109","type":"SaveTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20111","type":"BoxAnnotation"},{"attributes":{},"id":"20100","type":"BasicTicker"},{"attributes":{},"id":"20091","type":"LinearScale"},{"attributes":{"children":[{"id":"20142"},{"id":"20140"}]},"id":"20143","type":"Column"},{"attributes":{"source":{"id":"20123"}},"id":"20125","type":"CDSView"},{"attributes":{"toolbar":{"id":"20141"},"toolbar_location":"above"},"id":"20142","type":"ToolbarBox"},{"attributes":{},"id":"20106","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"20095"},"coordinates":null,"group":null,"ticker":null},"id":"20098","type":"Grid"},{"attributes":{},"id":"20108","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"20113"}],"tools":[{"id":"20103"},{"id":"20104"},{"id":"20105"},{"id":"20106"},{"id":"20107"},{"id":"20108"},{"id":"20109"},{"id":"20110"}]},"id":"20141","type":"ProxyToolbar"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20130"},"group":null,"major_label_policy":{"id":"20131"},"ticker":{"id":"20100"}},"id":"20099","type":"LinearAxis"},{"attributes":{},"id":"20130","type":"BasicTickFormatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20136"},"selection_policy":{"id":"20135"}},"id":"20123","type":"ColumnDataSource"},{"attributes":{},"id":"20089","type":"DataRange1d"},{"attributes":{},"id":"20104","type":"PanTool"},{"attributes":{},"id":"20087","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"20123"},"glyph":{"id":"20122"},"group":null,"hover_glyph":null,"view":{"id":"20125"}},"id":"20124","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20112","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"20095"}],"center":[{"id":"20098"},{"id":"20102"}],"height":288,"left":[{"id":"20099"}],"output_backend":"webgl","renderers":[{"id":"20124"}],"title":{"id":"20126"},"toolbar":{"id":"20113"},"toolbar_location":null,"width":432,"x_range":{"id":"20087"},"x_scale":{"id":"20091"},"y_range":{"id":"20089"},"y_scale":{"id":"20093"}},"id":"20086","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20134","type":"AllLabels"}],"root_ids":["20143"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"f86ad8aa-2283-4e79-a894-5dfe162a3971","root_ids":["20143"],"roots":{"20143":"5da28f0a-0ba2-4f90-b970-cdd8972a45ac"}}];
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