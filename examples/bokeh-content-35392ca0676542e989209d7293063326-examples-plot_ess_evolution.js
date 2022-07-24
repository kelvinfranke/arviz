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
    
    
    const element = document.getElementById("5a3e7971-0e2c-4c52-9be5-3e1d452359fe");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5a3e7971-0e2c-4c52-9be5-3e1d452359fe' but no matching script tag was found.")
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
                  const docs_json = '{"49e65c77-aef7-4eb2-9692-6f2b19695369":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23721","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"23716","type":"Line"},{"attributes":{},"id":"23670","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"23729","type":"Title"},{"attributes":{},"id":"23685","type":"WheelZoomTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"23714","type":"Line"},{"attributes":{},"id":"23679","type":"BasicTicker"},{"attributes":{},"id":"23687","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23739"},"selection_policy":{"id":"23738"}},"id":"23701","type":"ColumnDataSource"},{"attributes":{},"id":"23739","type":"Selection"},{"attributes":{"overlay":{"id":"23691"}},"id":"23686","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"23709","type":"Line"},{"attributes":{},"id":"23736","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"23725","type":"Span"},{"attributes":{},"id":"23738","type":"UnionRenderers"},{"attributes":{},"id":"23668","type":"DataRange1d"},{"attributes":{"source":{"id":"23701"}},"id":"23706","type":"CDSView"},{"attributes":{},"id":"23682","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"23707"},"glyph":{"id":"23708"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23710"},"nonselection_glyph":{"id":"23709"},"view":{"id":"23712"}},"id":"23711","type":"GlyphRenderer"},{"attributes":{},"id":"23737","type":"AllLabels"},{"attributes":{"toolbar":{"id":"23750"},"toolbar_location":"above"},"id":"23751","type":"ToolbarBox"},{"attributes":{},"id":"23675","type":"BasicTicker"},{"attributes":{"axis":{"id":"23674"},"coordinates":null,"group":null,"ticker":null},"id":"23677","type":"Grid"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"23705"},{"id":"23711"}]},"id":"23727","type":"LegendItem"},{"attributes":{"overlay":{"id":"23690"}},"id":"23684","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"23682"},{"id":"23683"},{"id":"23684"},{"id":"23685"},{"id":"23686"},{"id":"23687"},{"id":"23688"},{"id":"23689"}]},"id":"23692","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"23708","type":"Line"},{"attributes":{},"id":"23740","type":"UnionRenderers"},{"attributes":{},"id":"23744","type":"UnionRenderers"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"23723"},{"id":"23717"}]},"id":"23728","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23745"},"selection_policy":{"id":"23744"}},"id":"23719","type":"ColumnDataSource"},{"attributes":{},"id":"23672","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23720","type":"Circle"},{"attributes":{},"id":"23734","type":"AllLabels"},{"attributes":{},"id":"23688","type":"SaveTool"},{"attributes":{},"id":"23666","type":"DataRange1d"},{"attributes":{"source":{"id":"23719"}},"id":"23724","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"23713"},"glyph":{"id":"23714"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23716"},"nonselection_glyph":{"id":"23715"},"view":{"id":"23718"}},"id":"23717","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"23719"},"glyph":{"id":"23720"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23722"},"nonselection_glyph":{"id":"23721"},"view":{"id":"23724"}},"id":"23723","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23743"},"selection_policy":{"id":"23742"}},"id":"23713","type":"ColumnDataSource"},{"attributes":{"source":{"id":"23713"}},"id":"23718","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"23715","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"23741"},"selection_policy":{"id":"23740"}},"id":"23707","type":"ColumnDataSource"},{"attributes":{"source":{"id":"23707"}},"id":"23712","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23691","type":"PolyAnnotation"},{"attributes":{},"id":"23742","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"23701"},"glyph":{"id":"23702"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23704"},"nonselection_glyph":{"id":"23703"},"view":{"id":"23706"}},"id":"23705","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"23692"}],"tools":[{"id":"23682"},{"id":"23683"},{"id":"23684"},{"id":"23685"},{"id":"23686"},{"id":"23687"},{"id":"23688"},{"id":"23689"}]},"id":"23750","type":"ProxyToolbar"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"23727"},{"id":"23728"}],"location":"center_right","orientation":"horizontal"},"id":"23726","type":"Legend"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23702","type":"Circle"},{"attributes":{},"id":"23733","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23722","type":"Circle"},{"attributes":{"children":[{"id":"23751"},{"id":"23749"}]},"id":"23752","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23690","type":"BoxAnnotation"},{"attributes":{},"id":"23745","type":"Selection"},{"attributes":{"children":[[{"id":"23665"},0,0]]},"id":"23749","type":"GridBox"},{"attributes":{},"id":"23741","type":"Selection"},{"attributes":{"callback":null},"id":"23689","type":"HoverTool"},{"attributes":{"above":[{"id":"23726"}],"below":[{"id":"23674"}],"center":[{"id":"23677"},{"id":"23681"}],"height":500,"left":[{"id":"23678"}],"output_backend":"webgl","renderers":[{"id":"23705"},{"id":"23711"},{"id":"23717"},{"id":"23723"},{"id":"23725"}],"title":{"id":"23729"},"toolbar":{"id":"23692"},"toolbar_location":null,"width":500,"x_range":{"id":"23666"},"x_scale":{"id":"23670"},"y_range":{"id":"23668"},"y_scale":{"id":"23672"}},"id":"23665","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23704","type":"Circle"},{"attributes":{},"id":"23683","type":"PanTool"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"23736"},"group":null,"major_label_policy":{"id":"23737"},"ticker":{"id":"23675"}},"id":"23674","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"23710","type":"Line"},{"attributes":{},"id":"23743","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23703","type":"Circle"},{"attributes":{"axis":{"id":"23678"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23681","type":"Grid"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"23733"},"group":null,"major_label_policy":{"id":"23734"},"ticker":{"id":"23679"}},"id":"23678","type":"LinearAxis"}],"root_ids":["23752"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"49e65c77-aef7-4eb2-9692-6f2b19695369","root_ids":["23752"],"roots":{"23752":"5a3e7971-0e2c-4c52-9be5-3e1d452359fe"}}];
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