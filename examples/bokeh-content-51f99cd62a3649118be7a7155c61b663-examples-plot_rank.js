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
    
    
    const element = document.getElementById("52fc3ad5-7e54-4b06-b92b-e23b4c90c900");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52fc3ad5-7e54-4b06-b92b-e23b4c90c900' but no matching script tag was found.")
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
                  const docs_json = '{"eb463e8d-f948-4bb4-98a0-690c4cace4f9":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51132","type":"VBar"},{"attributes":{},"id":"51191","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"51130","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"51124"},"glyph":{"id":"51125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51127"},"nonselection_glyph":{"id":"51126"},"view":{"id":"51129"}},"id":"51128","type":"GlyphRenderer"},{"attributes":{},"id":"51192","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"51131"},"glyph":{"id":"51132"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51134"},"nonselection_glyph":{"id":"51133"},"view":{"id":"51136"}},"id":"51135","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51127","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51134","type":"VBar"},{"attributes":{"source":{"id":"51124"}},"id":"51129","type":"CDSView"},{"attributes":{},"id":"51206","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"51138"},"glyph":{"id":"51139"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51141"},"nonselection_glyph":{"id":"51140"},"view":{"id":"51143"}},"id":"51142","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51192"},"selection_policy":{"id":"51191"}},"id":"51131","type":"ColumnDataSource"},{"attributes":{},"id":"51207","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51141","type":"VBar"},{"attributes":{},"id":"51182","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"51137","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51139","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51133","type":"VBar"},{"attributes":{},"id":"51183","type":"AllLabels"},{"attributes":{"source":{"id":"51131"}},"id":"51136","type":"CDSView"},{"attributes":{},"id":"51185","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51194"},"selection_policy":{"id":"51193"}},"id":"51138","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"51144","type":"Span"},{"attributes":{},"id":"51186","type":"AllLabels"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51157","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51140","type":"VBar"},{"attributes":{},"id":"51193","type":"UnionRenderers"},{"attributes":{"source":{"id":"51138"}},"id":"51143","type":"CDSView"},{"attributes":{},"id":"51194","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51205"},"selection_policy":{"id":"51204"}},"id":"51149","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"51156"},"glyph":{"id":"51157"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51159"},"nonselection_glyph":{"id":"51158"},"view":{"id":"51161"}},"id":"51160","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51152","type":"VBar"},{"attributes":{},"id":"51208","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51150","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"51149"},"glyph":{"id":"51150"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51152"},"nonselection_glyph":{"id":"51151"},"view":{"id":"51154"}},"id":"51153","type":"GlyphRenderer"},{"attributes":{},"id":"51209","type":"Selection"},{"attributes":{"source":{"id":"51149"}},"id":"51154","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51151","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51159","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"51155","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"51163"},"glyph":{"id":"51164"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51166"},"nonselection_glyph":{"id":"51165"},"view":{"id":"51168"}},"id":"51167","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"51090"}],"center":[{"id":"51093"},{"id":"51097"},{"id":"51155"},{"id":"51162"},{"id":"51169"},{"id":"51176"}],"height":331,"left":[{"id":"51094"}],"output_backend":"webgl","renderers":[{"id":"51153"},{"id":"51160"},{"id":"51167"},{"id":"51174"}],"title":{"id":"51179"},"toolbar":{"id":"51108"},"toolbar_location":null,"width":496,"x_range":{"id":"51048"},"x_scale":{"id":"51086"},"y_range":{"id":"51050"},"y_scale":{"id":"51088"}},"id":"51083","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51207"},"selection_policy":{"id":"51206"}},"id":"51156","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51166","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"51162","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51164","type":"VBar"},{"attributes":{},"id":"51187","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51158","type":"VBar"},{"attributes":{"source":{"id":"51156"}},"id":"51161","type":"CDSView"},{"attributes":{},"id":"51188","type":"Selection"},{"attributes":{"toolbars":[{"id":"51074"},{"id":"51108"}],"tools":[{"id":"51064"},{"id":"51065"},{"id":"51066"},{"id":"51067"},{"id":"51068"},{"id":"51069"},{"id":"51070"},{"id":"51071"},{"id":"51098"},{"id":"51099"},{"id":"51100"},{"id":"51101"},{"id":"51102"},{"id":"51103"},{"id":"51104"},{"id":"51105"}]},"id":"51216","type":"ProxyToolbar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51209"},"selection_policy":{"id":"51208"}},"id":"51163","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51173","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"51169","type":"Span"},{"attributes":{"children":[[{"id":"51047"},0,0],[{"id":"51083"},0,1]]},"id":"51215","type":"GridBox"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51171","type":"VBar"},{"attributes":{},"id":"51210","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51165","type":"VBar"},{"attributes":{"below":[{"id":"51056"}],"center":[{"id":"51059"},{"id":"51063"},{"id":"51123"},{"id":"51130"},{"id":"51137"},{"id":"51144"}],"height":331,"left":[{"id":"51060"}],"output_backend":"webgl","renderers":[{"id":"51121"},{"id":"51128"},{"id":"51135"},{"id":"51142"}],"title":{"id":"51147"},"toolbar":{"id":"51074"},"toolbar_location":null,"width":496,"x_range":{"id":"51048"},"x_scale":{"id":"51052"},"y_range":{"id":"51050"},"y_scale":{"id":"51054"}},"id":"51047","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"51163"}},"id":"51168","type":"CDSView"},{"attributes":{},"id":"51211","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"51145","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51211"},"selection_policy":{"id":"51210"}},"id":"51170","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51172","type":"VBar"},{"attributes":{"toolbar":{"id":"51216"},"toolbar_location":"above"},"id":"51217","type":"ToolbarBox"},{"attributes":{},"id":"51189","type":"UnionRenderers"},{"attributes":{},"id":"51190","type":"Selection"},{"attributes":{"axis":{"id":"51090"},"coordinates":null,"group":null,"ticker":null},"id":"51093","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"51147","type":"Title"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"51199"},"group":null,"major_label_policy":{"id":"51200"},"ticker":{"id":"51177"}},"id":"51094","type":"LinearAxis"},{"attributes":{},"id":"51091","type":"BasicTicker"},{"attributes":{"axis":{"id":"51056"},"coordinates":null,"group":null,"ticker":null},"id":"51059","type":"Grid"},{"attributes":{},"id":"51088","type":"LinearScale"},{"attributes":{"callback":null},"id":"51105","type":"HoverTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"51202"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"51203"},"ticker":{"id":"51091"}},"id":"51090","type":"LinearAxis"},{"attributes":{"axis":{"id":"51094"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"51097","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"51179","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51188"},"selection_policy":{"id":"51187"}},"id":"51117","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"51106"}},"id":"51100","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"51060"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"51063","type":"Grid"},{"attributes":{},"id":"51099","type":"PanTool"},{"attributes":{},"id":"51098","type":"ResetTool"},{"attributes":{},"id":"51104","type":"SaveTool"},{"attributes":{},"id":"51101","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"51107"}},"id":"51102","type":"LassoSelectTool"},{"attributes":{},"id":"51103","type":"UndoTool"},{"attributes":{},"id":"51057","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"51117"},"glyph":{"id":"51118"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51120"},"nonselection_glyph":{"id":"51119"},"view":{"id":"51122"}},"id":"51121","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"51185"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"51186"},"ticker":{"id":"51057"}},"id":"51056","type":"LinearAxis"},{"attributes":{"callback":null},"id":"51071","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"51106","type":"BoxAnnotation"},{"attributes":{},"id":"51065","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"51123","type":"Span"},{"attributes":{},"id":"51199","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"51182"},"group":null,"major_label_policy":{"id":"51183"},"ticker":{"id":"51145"}},"id":"51060","type":"LinearAxis"},{"attributes":{"children":[{"id":"51217"},{"id":"51215"}]},"id":"51218","type":"Column"},{"attributes":{},"id":"51054","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51118","type":"VBar"},{"attributes":{},"id":"51200","type":"AllLabels"},{"attributes":{"overlay":{"id":"51072"}},"id":"51066","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"51098"},{"id":"51099"},{"id":"51100"},{"id":"51101"},{"id":"51102"},{"id":"51103"},{"id":"51104"},{"id":"51105"}]},"id":"51108","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51125","type":"VBar"},{"attributes":{},"id":"51202","type":"BasicTickFormatter"},{"attributes":{},"id":"51064","type":"ResetTool"},{"attributes":{"source":{"id":"51117"}},"id":"51122","type":"CDSView"},{"attributes":{},"id":"51070","type":"SaveTool"},{"attributes":{},"id":"51067","type":"WheelZoomTool"},{"attributes":{},"id":"51203","type":"AllLabels"},{"attributes":{"overlay":{"id":"51073"}},"id":"51068","type":"LassoSelectTool"},{"attributes":{},"id":"51069","type":"UndoTool"},{"attributes":{"tools":[{"id":"51064"},{"id":"51065"},{"id":"51066"},{"id":"51067"},{"id":"51068"},{"id":"51069"},{"id":"51070"},{"id":"51071"}]},"id":"51074","type":"Toolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"51177","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"51190"},"selection_policy":{"id":"51189"}},"id":"51124","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"51176","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"51072","type":"BoxAnnotation"},{"attributes":{"source":{"id":"51170"}},"id":"51175","type":"CDSView"},{"attributes":{},"id":"51052","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51120","type":"VBar"},{"attributes":{},"id":"51050","type":"DataRange1d"},{"attributes":{},"id":"51048","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51119","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"51126","type":"VBar"},{"attributes":{},"id":"51204","type":"UnionRenderers"},{"attributes":{},"id":"51205","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"51073","type":"PolyAnnotation"},{"attributes":{},"id":"51086","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"51107","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"51170"},"glyph":{"id":"51171"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"51173"},"nonselection_glyph":{"id":"51172"},"view":{"id":"51175"}},"id":"51174","type":"GlyphRenderer"}],"root_ids":["51218"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"eb463e8d-f948-4bb4-98a0-690c4cace4f9","root_ids":["51218"],"roots":{"51218":"52fc3ad5-7e54-4b06-b92b-e23b4c90c900"}}];
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