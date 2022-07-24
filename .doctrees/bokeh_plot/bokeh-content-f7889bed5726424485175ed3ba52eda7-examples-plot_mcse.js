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
    
    
    const element = document.getElementById("6c9a2295-9bde-4c1a-8168-c8d5d5947e4a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6c9a2295-9bde-4c1a-8168-c8d5d5947e4a' but no matching script tag was found.")
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
                  const docs_json = '{"74559e76-d817-488e-85dd-a93db14efc4c":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"44609","type":"Title"},{"attributes":{"end":1,"start":-0.05},"id":"44548","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"44630"},"group":null,"major_label_policy":{"id":"44631"},"ticker":{"id":"44555"}},"id":"44554","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"44606"},"glyph":{"id":"44605"},"group":null,"hover_glyph":null,"view":{"id":"44608"}},"id":"44607","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"44627"},"group":null,"major_label_policy":{"id":"44628"},"ticker":{"id":"44559"}},"id":"44558","type":"LinearAxis"},{"attributes":{"source":{"id":"44606"}},"id":"44608","type":"CDSView"},{"attributes":{},"id":"44550","type":"LinearScale"},{"attributes":{"callback":null},"id":"44569","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"44536"},{"id":"44572"}],"tools":[{"id":"44526"},{"id":"44527"},{"id":"44528"},{"id":"44529"},{"id":"44530"},{"id":"44531"},{"id":"44532"},{"id":"44533"},{"id":"44562"},{"id":"44563"},{"id":"44564"},{"id":"44565"},{"id":"44566"},{"id":"44567"},{"id":"44568"},{"id":"44569"}]},"id":"44640","type":"ProxyToolbar"},{"attributes":{},"id":"44552","type":"LinearScale"},{"attributes":{},"id":"44620","type":"UnionRenderers"},{"attributes":{},"id":"44555","type":"BasicTicker"},{"attributes":{"axis":{"id":"44554"},"coordinates":null,"group":null,"ticker":null},"id":"44557","type":"Grid"},{"attributes":{},"id":"44621","type":"Selection"},{"attributes":{"toolbar":{"id":"44640"},"toolbar_location":"above"},"id":"44641","type":"ToolbarBox"},{"attributes":{"axis":{"id":"44558"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"44561","type":"Grid"},{"attributes":{},"id":"44627","type":"BasicTickFormatter"},{"attributes":{},"id":"44559","type":"BasicTicker"},{"attributes":{"tools":[{"id":"44526"},{"id":"44527"},{"id":"44528"},{"id":"44529"},{"id":"44530"},{"id":"44531"},{"id":"44532"},{"id":"44533"}]},"id":"44536","type":"Toolbar"},{"attributes":{"overlay":{"id":"44570"}},"id":"44564","type":"BoxZoomTool"},{"attributes":{},"id":"44628","type":"AllLabels"},{"attributes":{},"id":"44563","type":"PanTool"},{"attributes":{},"id":"44562","type":"ResetTool"},{"attributes":{},"id":"44568","type":"SaveTool"},{"attributes":{},"id":"44630","type":"BasicTickFormatter"},{"attributes":{},"id":"44565","type":"WheelZoomTool"},{"attributes":{},"id":"44514","type":"LinearScale"},{"attributes":{"overlay":{"id":"44571"}},"id":"44566","type":"LassoSelectTool"},{"attributes":{},"id":"44567","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"44616"},"group":null,"major_label_policy":{"id":"44617"},"ticker":{"id":"44519"}},"id":"44518","type":"LinearAxis"},{"attributes":{},"id":"44631","type":"AllLabels"},{"attributes":{"overlay":{"id":"44534"}},"id":"44528","type":"BoxZoomTool"},{"attributes":{"source":{"id":"44581"}},"id":"44586","type":"CDSView"},{"attributes":{},"id":"44529","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"44641"},{"id":"44639"}]},"id":"44642","type":"Column"},{"attributes":{},"id":"44531","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"44587","type":"Span"},{"attributes":{"overlay":{"id":"44535"}},"id":"44530","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44570","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"44604","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44583","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44584","type":"Circle"},{"attributes":{"axis":{"id":"44518"},"coordinates":null,"group":null,"ticker":null},"id":"44521","type":"Grid"},{"attributes":{},"id":"44632","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"44512","type":"DataRange1d"},{"attributes":{},"id":"44633","type":"Selection"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"44590","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"44588","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"44621"},"selection_policy":{"id":"44620"}},"id":"44591","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"44594","type":"Title"},{"attributes":{"source":{"id":"44591"}},"id":"44593","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"44633"},"selection_policy":{"id":"44632"}},"id":"44596","type":"ColumnDataSource"},{"attributes":{},"id":"44613","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44535","type":"PolyAnnotation"},{"attributes":{},"id":"44614","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"44596"},"glyph":{"id":"44597"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"44599"},"nonselection_glyph":{"id":"44598"},"view":{"id":"44601"}},"id":"44600","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"44509"},0,0],[{"id":"44545"},0,1]]},"id":"44639","type":"GridBox"},{"attributes":{},"id":"44546","type":"DataRange1d"},{"attributes":{},"id":"44616","type":"BasicTickFormatter"},{"attributes":{},"id":"44634","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"44591"},"glyph":{"id":"44590"},"group":null,"hover_glyph":null,"view":{"id":"44593"}},"id":"44592","type":"GlyphRenderer"},{"attributes":{},"id":"44526","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"44603","type":"Span"},{"attributes":{},"id":"44635","type":"Selection"},{"attributes":{"below":[{"id":"44518"}],"center":[{"id":"44521"},{"id":"44525"}],"height":500,"left":[{"id":"44522"}],"output_backend":"webgl","renderers":[{"id":"44585"},{"id":"44587"},{"id":"44588"},{"id":"44589"},{"id":"44592"}],"title":{"id":"44594"},"toolbar":{"id":"44536"},"toolbar_location":null,"width":500,"x_range":{"id":"44510"},"x_scale":{"id":"44514"},"y_range":{"id":"44512"},"y_scale":{"id":"44516"}},"id":"44509","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"44617","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44599","type":"Circle"},{"attributes":{"tools":[{"id":"44562"},{"id":"44563"},{"id":"44564"},{"id":"44565"},{"id":"44566"},{"id":"44567"},{"id":"44568"},{"id":"44569"}]},"id":"44572","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"44619"},"selection_policy":{"id":"44618"}},"id":"44581","type":"ColumnDataSource"},{"attributes":{},"id":"44519","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44598","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"44581"},"glyph":{"id":"44582"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"44584"},"nonselection_glyph":{"id":"44583"},"view":{"id":"44586"}},"id":"44585","type":"GlyphRenderer"},{"attributes":{},"id":"44510","type":"DataRange1d"},{"attributes":{},"id":"44618","type":"UnionRenderers"},{"attributes":{},"id":"44532","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44571","type":"PolyAnnotation"},{"attributes":{},"id":"44527","type":"PanTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44534","type":"BoxAnnotation"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"44605","type":"Scatter"},{"attributes":{},"id":"44619","type":"Selection"},{"attributes":{"below":[{"id":"44554"}],"center":[{"id":"44557"},{"id":"44561"}],"height":500,"left":[{"id":"44558"}],"output_backend":"webgl","renderers":[{"id":"44600"},{"id":"44602"},{"id":"44603"},{"id":"44604"},{"id":"44607"}],"title":{"id":"44609"},"toolbar":{"id":"44572"},"toolbar_location":null,"width":500,"x_range":{"id":"44546"},"x_scale":{"id":"44550"},"y_range":{"id":"44548"},"y_scale":{"id":"44552"}},"id":"44545","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"44533","type":"HoverTool"},{"attributes":{},"id":"44516","type":"LinearScale"},{"attributes":{"source":{"id":"44596"}},"id":"44601","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44597","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"44602","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44582","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"44635"},"selection_policy":{"id":"44634"}},"id":"44606","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"44522"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"44525","type":"Grid"},{"attributes":{},"id":"44523","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"44589","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"44613"},"group":null,"major_label_policy":{"id":"44614"},"ticker":{"id":"44523"}},"id":"44522","type":"LinearAxis"}],"root_ids":["44642"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"74559e76-d817-488e-85dd-a93db14efc4c","root_ids":["44642"],"roots":{"44642":"6c9a2295-9bde-4c1a-8168-c8d5d5947e4a"}}];
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