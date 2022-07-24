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
    
    
    const element = document.getElementById("5936750a-6693-485e-893c-accc8bc15b67");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5936750a-6693-485e-893c-accc8bc15b67' but no matching script tag was found.")
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
                  const docs_json = '{"094e1275-d33b-4dc0-a822-c1456449bef9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"23228","type":"ResetTool"},{"attributes":{"axis":{"id":"23220"},"coordinates":null,"group":null,"ticker":null},"id":"23223","type":"Grid"},{"attributes":{"data":{},"selected":{"id":"23284"},"selection_policy":{"id":"23283"}},"id":"23259","type":"ColumnDataSource"},{"attributes":{},"id":"23218","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"23253"},"glyph":{"id":"23254"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23256"},"nonselection_glyph":{"id":"23255"},"view":{"id":"23258"}},"id":"23257","type":"GlyphRenderer"},{"attributes":{},"id":"23274","type":"BasicTickFormatter"},{"attributes":{},"id":"23280","type":"Selection"},{"attributes":{},"id":"23282","type":"Selection"},{"attributes":{"coordinates":null,"formatter":{"id":"23277"},"group":null,"major_label_policy":{"id":"23278"},"ticker":{"id":"23221"}},"id":"23220","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"23265"},"glyph":{"id":"23266"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23268"},"nonselection_glyph":{"id":"23267"},"view":{"id":"23270"}},"id":"23269","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"23266","type":"Circle"},{"attributes":{},"id":"23216","type":"LinearScale"},{"attributes":{},"id":"23225","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"23255","type":"Line"},{"attributes":{},"id":"23279","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23237","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"23260","type":"Circle"},{"attributes":{},"id":"23277","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"23220"}],"center":[{"id":"23223"},{"id":"23227"}],"height":360,"left":[{"id":"23224"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"23251"},{"id":"23257"},{"id":"23263"},{"id":"23269"}],"title":{"id":"23271"},"toolbar":{"id":"23238"},"toolbar_location":null,"width":720,"x_range":{"id":"23212"},"x_scale":{"id":"23216"},"y_range":{"id":"23214"},"y_scale":{"id":"23218"}},"id":"23211","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23275","type":"AllLabels"},{"attributes":{"source":{"id":"23265"}},"id":"23270","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"23286"},"selection_policy":{"id":"23285"}},"id":"23265","type":"ColumnDataSource"},{"attributes":{},"id":"23283","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"23259"},"glyph":{"id":"23260"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23262"},"nonselection_glyph":{"id":"23261"},"view":{"id":"23264"}},"id":"23263","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23236","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"23267","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"23262","type":"Circle"},{"attributes":{"children":[[{"id":"23211"},0,0]]},"id":"23290","type":"GridBox"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"23256","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"23261","type":"Circle"},{"attributes":{},"id":"23229","type":"PanTool"},{"attributes":{"coordinates":null,"group":null},"id":"23271","type":"Title"},{"attributes":{"source":{"id":"23253"}},"id":"23258","type":"CDSView"},{"attributes":{},"id":"23284","type":"Selection"},{"attributes":{"axis":{"id":"23224"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"23227","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"23250","type":"Line"},{"attributes":{},"id":"23214","type":"DataRange1d"},{"attributes":{},"id":"23231","type":"WheelZoomTool"},{"attributes":{"source":{"id":"23259"}},"id":"23264","type":"CDSView"},{"attributes":{"callback":null},"id":"23235","type":"HoverTool"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"23248","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"23268","type":"Circle"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"23282"},"selection_policy":{"id":"23281"}},"id":"23253","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"23237"}},"id":"23232","type":"LassoSelectTool"},{"attributes":{},"id":"23212","type":"DataRange1d"},{"attributes":{},"id":"23278","type":"AllLabels"},{"attributes":{"toolbar":{"id":"23291"},"toolbar_location":"above"},"id":"23292","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"23228"},{"id":"23229"},{"id":"23230"},{"id":"23231"},{"id":"23232"},{"id":"23233"},{"id":"23234"},{"id":"23235"}]},"id":"23238","type":"Toolbar"},{"attributes":{"overlay":{"id":"23236"}},"id":"23230","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"23238"}],"tools":[{"id":"23228"},{"id":"23229"},{"id":"23230"},{"id":"23231"},{"id":"23232"},{"id":"23233"},{"id":"23234"},{"id":"23235"}]},"id":"23291","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"23247"},"glyph":{"id":"23248"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23250"},"nonselection_glyph":{"id":"23249"},"view":{"id":"23252"}},"id":"23251","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"23280"},"selection_policy":{"id":"23279"}},"id":"23247","type":"ColumnDataSource"},{"attributes":{},"id":"23285","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"23249","type":"Line"},{"attributes":{"coordinates":null,"formatter":{"id":"23274"},"group":null,"major_label_policy":{"id":"23275"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"23225"}},"id":"23224","type":"LinearAxis"},{"attributes":{},"id":"23281","type":"UnionRenderers"},{"attributes":{},"id":"23234","type":"SaveTool"},{"attributes":{"source":{"id":"23247"}},"id":"23252","type":"CDSView"},{"attributes":{},"id":"23221","type":"BasicTicker"},{"attributes":{},"id":"23233","type":"UndoTool"},{"attributes":{},"id":"23286","type":"Selection"},{"attributes":{"children":[{"id":"23292"},{"id":"23290"}]},"id":"23293","type":"Column"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"23254","type":"Line"}],"root_ids":["23293"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"094e1275-d33b-4dc0-a822-c1456449bef9","root_ids":["23293"],"roots":{"23293":"5936750a-6693-485e-893c-accc8bc15b67"}}];
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