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
    
    
    const element = document.getElementById("c792a86a-2f76-41f3-b83b-b5ce650c82ee");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c792a86a-2f76-41f3-b83b-b5ce650c82ee' but no matching script tag was found.")
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
                  const docs_json = '{"8b9b9bf9-ad43-4560-919d-d744f9198c36":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"23977"},"glyph":{"id":"23978"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23980"},"nonselection_glyph":{"id":"23979"},"view":{"id":"23982"}},"id":"23981","type":"GlyphRenderer"},{"attributes":{},"id":"23959","type":"PanTool"},{"attributes":{"source":{"id":"23977"}},"id":"23982","type":"CDSView"},{"attributes":{"callback":null},"id":"23965","type":"HoverTool"},{"attributes":{"overlay":{"id":"23966"}},"id":"23960","type":"BoxZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"23988"},"group":null,"major_label_policy":{"id":"23989"},"ticker":{"id":"23955"}},"id":"23954","type":"LinearAxis"},{"attributes":{"children":[[{"id":"23941"},0,0]]},"id":"23998","type":"GridBox"},{"attributes":{"tools":[{"id":"23958"},{"id":"23959"},{"id":"23960"},{"id":"23961"},{"id":"23962"},{"id":"23963"},{"id":"23964"},{"id":"23965"}]},"id":"23968","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23980","type":"Circle"},{"attributes":{},"id":"23942","type":"DataRange1d"},{"attributes":{},"id":"23955","type":"BasicTicker"},{"attributes":{},"id":"23988","type":"BasicTickFormatter"},{"attributes":{},"id":"23964","type":"SaveTool"},{"attributes":{},"id":"23948","type":"LinearScale"},{"attributes":{"below":[{"id":"23950"}],"center":[{"id":"23953"},{"id":"23957"}],"height":500,"left":[{"id":"23954"}],"output_backend":"webgl","renderers":[{"id":"23981"},{"id":"23983"}],"title":{"id":"23984"},"toolbar":{"id":"23968"},"toolbar_location":null,"width":500,"x_range":{"id":"23942"},"x_scale":{"id":"23946"},"y_range":{"id":"23944"},"y_scale":{"id":"23948"}},"id":"23941","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"23954"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23957","type":"Grid"},{"attributes":{"toolbar":{"id":"23999"},"toolbar_location":"above"},"id":"24000","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"23983","type":"Span"},{"attributes":{"toolbars":[{"id":"23968"}],"tools":[{"id":"23958"},{"id":"23959"},{"id":"23960"},{"id":"23961"},{"id":"23962"},{"id":"23963"},{"id":"23964"},{"id":"23965"}]},"id":"23999","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"23950"},"coordinates":null,"group":null,"ticker":null},"id":"23953","type":"Grid"},{"attributes":{},"id":"23944","type":"DataRange1d"},{"attributes":{},"id":"23992","type":"AllLabels"},{"attributes":{},"id":"23993","type":"UnionRenderers"},{"attributes":{},"id":"23963","type":"UndoTool"},{"attributes":{},"id":"23946","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23978","type":"Circle"},{"attributes":{},"id":"23951","type":"BasicTicker"},{"attributes":{},"id":"23958","type":"ResetTool"},{"attributes":{},"id":"23961","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23994"},"selection_policy":{"id":"23993"}},"id":"23977","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"23991"},"group":null,"major_label_policy":{"id":"23992"},"ticker":{"id":"23951"}},"id":"23950","type":"LinearAxis"},{"attributes":{},"id":"23989","type":"AllLabels"},{"attributes":{},"id":"23994","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23966","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"23984","type":"Title"},{"attributes":{"children":[{"id":"24000"},{"id":"23998"}]},"id":"24001","type":"Column"},{"attributes":{"overlay":{"id":"23967"}},"id":"23962","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23979","type":"Circle"},{"attributes":{},"id":"23991","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23967","type":"PolyAnnotation"}],"root_ids":["24001"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"8b9b9bf9-ad43-4560-919d-d744f9198c36","root_ids":["24001"],"roots":{"24001":"c792a86a-2f76-41f3-b83b-b5ce650c82ee"}}];
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