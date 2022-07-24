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
    
    
    const element = document.getElementById("1af00397-d1e0-4131-939c-0894aa70fc56");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1af00397-d1e0-4131-939c-0894aa70fc56' but no matching script tag was found.")
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
                  const docs_json = '{"d68d0605-c911-44c1-a595-44cce94eb3f9":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"20919"}},"id":"20924","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20907","type":"PolyAnnotation"},{"attributes":{},"id":"20956","type":"Selection"},{"attributes":{"data":{"xs":[[-30.89672005978525,-30.724396750606648]],"ys":[[-0.75,-0.75]]},"selected":{"id":"20958"},"selection_policy":{"id":"20957"}},"id":"20925","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"20898"},{"id":"20899"},{"id":"20900"},{"id":"20901"},{"id":"20902"},{"id":"20903"},{"id":"20904"},{"id":"20905"}]},"id":"20908","type":"Toolbar"},{"attributes":{"axis_label":"elpd_loo (log)","coordinates":null,"formatter":{"id":"20953"},"group":null,"major_label_policy":{"id":"20954"},"ticker":{"id":"20891"}},"id":"20890","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"20960"},"selection_policy":{"id":"20959"}},"id":"20931","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20894"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20897","type":"Grid"},{"attributes":{},"id":"20882","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20934","type":"Circle"},{"attributes":{},"id":"20950","type":"BasicTickFormatter"},{"attributes":{"data":{"xs":[[-32.053182324911575,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"20962"},"selection_policy":{"id":"20961"}},"id":"20937","type":"ColumnDataSource"},{"attributes":{},"id":"20891","type":"BasicTicker"},{"attributes":{"children":[{"id":"20968"},{"id":"20966"}]},"id":"20969","type":"Column"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20928","type":"MultiLine"},{"attributes":{"label":{"value":"ELPD"},"renderers":[{"id":"20935"},{"id":"20941"}]},"id":"20946","type":"LegendItem"},{"attributes":{},"id":"20886","type":"LinearScale"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20938","type":"MultiLine"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"20943","type":"Span"},{"attributes":{},"id":"20957","type":"UnionRenderers"},{"attributes":{"label":{"value":"ELPD difference"},"renderers":[{"id":"20923"},{"id":"20929"}]},"id":"20945","type":"LegendItem"},{"attributes":{},"id":"20962","type":"Selection"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20932","type":"Circle"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20940","type":"MultiLine"},{"attributes":{},"id":"20958","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20925"},"glyph":{"id":"20926"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20928"},"nonselection_glyph":{"id":"20927"},"view":{"id":"20930"}},"id":"20929","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20906","type":"BoxAnnotation"},{"attributes":{},"id":"20959","type":"UnionRenderers"},{"attributes":{},"id":"20953","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20921","type":"Scatter"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20920","type":"Scatter"},{"attributes":{"source":{"id":"20925"}},"id":"20930","type":"CDSView"},{"attributes":{"children":[[{"id":"20881"},0,0]]},"id":"20966","type":"GridBox"},{"attributes":{},"id":"20951","type":"AllLabels"},{"attributes":{"callback":null},"id":"20905","type":"HoverTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"20884","type":"DataRange1d"},{"attributes":{},"id":"20888","type":"LinearScale"},{"attributes":{},"id":"20954","type":"AllLabels"},{"attributes":{"axis":{"id":"20890"},"coordinates":null,"group":null,"ticker":null},"id":"20893","type":"Grid"},{"attributes":{"source":{"id":"20937"}},"id":"20942","type":"CDSView"},{"attributes":{},"id":"20901","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20922","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20939","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"20919"},"glyph":{"id":"20920"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20922"},"nonselection_glyph":{"id":"20921"},"view":{"id":"20924"}},"id":"20923","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"20931"},"glyph":{"id":"20932"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20934"},"nonselection_glyph":{"id":"20933"},"view":{"id":"20936"}},"id":"20935","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20931"}},"id":"20936","type":"CDSView"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20945"},{"id":"20946"}]},"id":"20944","type":"Legend"},{"attributes":{"ticks":[0.0,-1.0]},"id":"20917","type":"FixedTicker"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20926","type":"MultiLine"},{"attributes":{},"id":"20903","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20937"},"glyph":{"id":"20938"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20940"},"nonselection_glyph":{"id":"20939"},"view":{"id":"20942"}},"id":"20941","type":"GlyphRenderer"},{"attributes":{},"id":"20960","type":"Selection"},{"attributes":{},"id":"20899","type":"PanTool"},{"attributes":{},"id":"20955","type":"UnionRenderers"},{"attributes":{"above":[{"id":"20944"}],"below":[{"id":"20890"}],"center":[{"id":"20893"},{"id":"20897"}],"height":500,"left":[{"id":"20894"}],"output_backend":"webgl","renderers":[{"id":"20923"},{"id":"20929"},{"id":"20935"},{"id":"20941"},{"id":"20943"}],"title":{"id":"20947"},"toolbar":{"id":"20908"},"toolbar_location":null,"width":500,"x_range":{"id":"20882"},"x_scale":{"id":"20886"},"y_range":{"id":"20884"},"y_scale":{"id":"20888"}},"id":"20881","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"20906"}},"id":"20900","type":"BoxZoomTool"},{"attributes":{"axis_label":"ranked models","coordinates":null,"formatter":{"id":"20950"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"20951"},"ticker":{"id":"20917"}},"id":"20894","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"20956"},"selection_policy":{"id":"20955"}},"id":"20919","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"Model comparison\\nhigher is better"},"id":"20947","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20933","type":"Circle"},{"attributes":{"toolbars":[{"id":"20908"}],"tools":[{"id":"20898"},{"id":"20899"},{"id":"20900"},{"id":"20901"},{"id":"20902"},{"id":"20903"},{"id":"20904"},{"id":"20905"}]},"id":"20967","type":"ProxyToolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"20927","type":"MultiLine"},{"attributes":{},"id":"20898","type":"ResetTool"},{"attributes":{"toolbar":{"id":"20967"},"toolbar_location":"above"},"id":"20968","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"20907"}},"id":"20902","type":"LassoSelectTool"},{"attributes":{},"id":"20904","type":"SaveTool"},{"attributes":{},"id":"20961","type":"UnionRenderers"}],"root_ids":["20969"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"d68d0605-c911-44c1-a595-44cce94eb3f9","root_ids":["20969"],"roots":{"20969":"1af00397-d1e0-4131-939c-0894aa70fc56"}}];
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