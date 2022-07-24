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
    
    
    const element = document.getElementById("fad0cad9-30df-4262-94f2-b49f8968e497");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fad0cad9-30df-4262-94f2-b49f8968e497' but no matching script tag was found.")
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
                  const docs_json = '{"4df7b294-39aa-4788-9972-2bd8ff9db910":{"defs":[],"roots":{"references":[{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"23881"},"selection_policy":{"id":"23880"}},"id":"23864","type":"ColumnDataSource"},{"attributes":{},"id":"23881","type":"Selection"},{"attributes":{},"id":"23838","type":"ResetTool"},{"attributes":{},"id":"23879","type":"Selection"},{"attributes":{},"id":"23839","type":"PanTool"},{"attributes":{"overlay":{"id":"23847"}},"id":"23842","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"23830"},"coordinates":null,"group":null,"ticker":null},"id":"23833","type":"Grid"},{"attributes":{"below":[{"id":"23830"}],"center":[{"id":"23833"},{"id":"23837"}],"height":500,"left":[{"id":"23834"}],"output_backend":"webgl","renderers":[{"id":"23861"},{"id":"23865"},{"id":"23867"},{"id":"23868"}],"title":{"id":"23869"},"toolbar":{"id":"23848"},"toolbar_location":null,"width":500,"x_range":{"id":"23822"},"x_scale":{"id":"23826"},"y_range":{"id":"23824"},"y_scale":{"id":"23828"}},"id":"23821","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"23864"},"glyph":{"id":"23863"},"group":null,"hover_glyph":null,"view":{"id":"23866"}},"id":"23865","type":"GlyphRenderer"},{"attributes":{},"id":"23876","type":"BasicTickFormatter"},{"attributes":{},"id":"23831","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"23867","type":"Span"},{"attributes":{"callback":null},"id":"23845","type":"HoverTool"},{"attributes":{},"id":"23877","type":"AllLabels"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"23876"},"group":null,"major_label_policy":{"id":"23877"},"ticker":{"id":"23831"}},"id":"23830","type":"LinearAxis"},{"attributes":{},"id":"23880","type":"UnionRenderers"},{"attributes":{},"id":"23843","type":"UndoTool"},{"attributes":{"toolbar":{"id":"23886"},"toolbar_location":"above"},"id":"23887","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23847","type":"PolyAnnotation"},{"attributes":{},"id":"23878","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"23848"}],"tools":[{"id":"23838"},{"id":"23839"},{"id":"23840"},{"id":"23841"},{"id":"23842"},{"id":"23843"},{"id":"23844"},{"id":"23845"}]},"id":"23886","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"23821"},0,0]]},"id":"23885","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23860","type":"Circle"},{"attributes":{"source":{"id":"23857"}},"id":"23862","type":"CDSView"},{"attributes":{},"id":"23835","type":"BasicTicker"},{"attributes":{},"id":"23828","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23859","type":"Circle"},{"attributes":{},"id":"23844","type":"SaveTool"},{"attributes":{},"id":"23822","type":"DataRange1d"},{"attributes":{"tools":[{"id":"23838"},{"id":"23839"},{"id":"23840"},{"id":"23841"},{"id":"23842"},{"id":"23843"},{"id":"23844"},{"id":"23845"}]},"id":"23848","type":"Toolbar"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"23863","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"23868","type":"Span"},{"attributes":{"overlay":{"id":"23846"}},"id":"23840","type":"BoxZoomTool"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"23873"},"group":null,"major_label_policy":{"id":"23874"},"ticker":{"id":"23835"}},"id":"23834","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23879"},"selection_policy":{"id":"23878"}},"id":"23857","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"23857"},"glyph":{"id":"23858"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23860"},"nonselection_glyph":{"id":"23859"},"view":{"id":"23862"}},"id":"23861","type":"GlyphRenderer"},{"attributes":{},"id":"23826","type":"LinearScale"},{"attributes":{},"id":"23824","type":"DataRange1d"},{"attributes":{"children":[{"id":"23887"},{"id":"23885"}]},"id":"23888","type":"Column"},{"attributes":{"source":{"id":"23864"}},"id":"23866","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23846","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"23869","type":"Title"},{"attributes":{},"id":"23873","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"23834"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23837","type":"Grid"},{"attributes":{},"id":"23874","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23858","type":"Circle"},{"attributes":{},"id":"23841","type":"WheelZoomTool"}],"root_ids":["23888"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"4df7b294-39aa-4788-9972-2bd8ff9db910","root_ids":["23888"],"roots":{"23888":"fad0cad9-30df-4262-94f2-b49f8968e497"}}];
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