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
    
    
    const element = document.getElementById("05a75b3e-0ca7-4f1a-921b-b2cd6f917670");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '05a75b3e-0ca7-4f1a-921b-b2cd6f917670' but no matching script tag was found.")
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
                  const docs_json = '{"c012b0b0-f5a6-453e-9150-c108b257eb2c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"24246","type":"Selection"},{"attributes":{},"id":"24251","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"24203","type":"Circle"},{"attributes":{},"id":"24262","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24211","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"24205","type":"Circle"},{"attributes":{},"id":"24258","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"24288"},"selection_policy":{"id":"24287"}},"id":"24220","type":"ColumnDataSource"},{"attributes":{},"id":"24281","type":"UnionRenderers"},{"attributes":{"source":{"id":"24196"}},"id":"24201","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24193","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"24196"},"glyph":{"id":"24197"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24199"},"nonselection_glyph":{"id":"24198"},"view":{"id":"24201"}},"id":"24200","type":"GlyphRenderer"},{"attributes":{},"id":"24282","type":"Selection"},{"attributes":{},"id":"24245","type":"UnionRenderers"},{"attributes":{},"id":"24253","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"24220"},"glyph":{"id":"24221"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24223"},"nonselection_glyph":{"id":"24222"},"view":{"id":"24225"}},"id":"24224","type":"GlyphRenderer"},{"attributes":{},"id":"24280","type":"Selection"},{"attributes":{"source":{"id":"24208"}},"id":"24213","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24103","type":"Line"},{"attributes":{},"id":"24263","type":"UnionRenderers"},{"attributes":{"source":{"id":"24220"}},"id":"24225","type":"CDSView"},{"attributes":{},"id":"24250","type":"Selection"},{"attributes":{},"id":"24275","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"24168","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"24282"},"selection_policy":{"id":"24281"}},"id":"24202","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24198","type":"Line"},{"attributes":{},"id":"24241","type":"UnionRenderers"},{"attributes":{"source":{"id":"24214"}},"id":"24219","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24215","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"24214"},"glyph":{"id":"24215"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24217"},"nonselection_glyph":{"id":"24216"},"view":{"id":"24219"}},"id":"24218","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24202"}},"id":"24207","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"24221","type":"Circle"},{"attributes":{},"id":"24247","type":"UnionRenderers"},{"attributes":{},"id":"24255","type":"UnionRenderers"},{"attributes":{},"id":"24260","type":"Selection"},{"attributes":{},"id":"24277","type":"UnionRenderers"},{"attributes":{},"id":"24249","type":"UnionRenderers"},{"attributes":{},"id":"24256","type":"Selection"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"24280"},"selection_policy":{"id":"24279"}},"id":"24196","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"24190"},"glyph":{"id":"24191"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24193"},"nonselection_glyph":{"id":"24192"},"view":{"id":"24195"}},"id":"24194","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"24242"},"selection_policy":{"id":"24241"}},"id":"24082","type":"ColumnDataSource"},{"attributes":{},"id":"24252","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"24208"},"glyph":{"id":"24209"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24211"},"nonselection_glyph":{"id":"24210"},"view":{"id":"24213"}},"id":"24212","type":"GlyphRenderer"},{"attributes":{},"id":"24261","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"24100"},"glyph":{"id":"24101"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24103"},"nonselection_glyph":{"id":"24102"},"view":{"id":"24105"}},"id":"24104","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"24222","type":"Circle"},{"attributes":{},"id":"24259","type":"UnionRenderers"},{"attributes":{"source":{"id":"24130"}},"id":"24135","type":"CDSView"},{"attributes":{"source":{"id":"24190"}},"id":"24195","type":"CDSView"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"24286"},"selection_policy":{"id":"24285"}},"id":"24214","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"24232"}],"below":[{"id":"24055"}],"center":[{"id":"24058"},{"id":"24062"}],"height":348,"left":[{"id":"24059"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"24086"},{"id":"24092"},{"id":"24098"},{"id":"24104"},{"id":"24110"},{"id":"24116"},{"id":"24122"},{"id":"24128"},{"id":"24134"},{"id":"24140"},{"id":"24146"},{"id":"24152"},{"id":"24158"},{"id":"24164"},{"id":"24170"},{"id":"24176"},{"id":"24182"},{"id":"24188"},{"id":"24194"},{"id":"24200"},{"id":"24206"},{"id":"24212"},{"id":"24218"},{"id":"24224"}],"title":{"id":"24226"},"toolbar":{"id":"24073"},"toolbar_location":null,"width":450,"x_range":{"id":"24228"},"x_scale":{"id":"24051"},"y_range":{"id":"24229"},"y_scale":{"id":"24053"}},"id":"24046","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"24202"},"glyph":{"id":"24203"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24205"},"nonselection_glyph":{"id":"24204"},"view":{"id":"24207"}},"id":"24206","type":"GlyphRenderer"},{"attributes":{},"id":"24257","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24216","type":"Line"},{"attributes":{},"id":"24264","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"24229","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"24204","type":"Circle"},{"attributes":{},"id":"24254","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24199","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"24223","type":"Circle"},{"attributes":{},"id":"24279","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24217","type":"Line"},{"attributes":{},"id":"24278","type":"Selection"},{"attributes":{},"id":"24274","type":"Selection"},{"attributes":{"toolbar":{"id":"24293"},"toolbar_location":"above"},"id":"24294","type":"ToolbarBox"},{"attributes":{},"id":"24240","type":"AllLabels"},{"attributes":{},"id":"24276","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24210","type":"Line"},{"attributes":{},"id":"24239","type":"BasicTickFormatter"},{"attributes":{},"id":"24051","type":"LinearScale"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24197","type":"Line"},{"attributes":{},"id":"24273","type":"UnionRenderers"},{"attributes":{},"id":"24068","type":"UndoTool"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"24233"},{"id":"24234"}],"location":"top_left"},"id":"24232","type":"Legend"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"24250"},"selection_policy":{"id":"24249"}},"id":"24106","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"24274"},"selection_policy":{"id":"24273"}},"id":"24178","type":"ColumnDataSource"},{"attributes":{},"id":"24268","type":"Selection"},{"attributes":{},"id":"24270","type":"Selection"},{"attributes":{"source":{"id":"24148"}},"id":"24153","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24125","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24179","type":"Line"},{"attributes":{"data":{},"selected":{"id":"24264"},"selection_policy":{"id":"24263"}},"id":"24148","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24156","type":"Line"},{"attributes":{"source":{"id":"24088"}},"id":"24093","type":"CDSView"},{"attributes":{"source":{"id":"24142"}},"id":"24147","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"24239"},"group":null,"major_label_policy":{"id":"24240"},"ticker":{"id":"24056"}},"id":"24055","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24091","type":"Line"},{"attributes":{"coordinates":null,"group":null,"text":"94.0% HDI"},"id":"24226","type":"Title"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24083","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"24124"},"glyph":{"id":"24125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24127"},"nonselection_glyph":{"id":"24126"},"view":{"id":"24129"}},"id":"24128","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"24095","type":"Circle"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"24268"},"selection_policy":{"id":"24267"}},"id":"24160","type":"ColumnDataSource"},{"attributes":{},"id":"24069","type":"SaveTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24119","type":"Line"},{"attributes":{"data":{},"selected":{"id":"24270"},"selection_policy":{"id":"24269"}},"id":"24166","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"24294"},{"id":"24292"}]},"id":"24295","type":"Column"},{"attributes":{},"id":"24269","type":"UnionRenderers"},{"attributes":{},"id":"24066","type":"WheelZoomTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24107","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"24150","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"24094"},"glyph":{"id":"24095"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24097"},"nonselection_glyph":{"id":"24096"},"view":{"id":"24099"}},"id":"24098","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24181","type":"Line"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"24256"},"selection_policy":{"id":"24255"}},"id":"24124","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24162","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"24112"},"glyph":{"id":"24113"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24115"},"nonselection_glyph":{"id":"24114"},"view":{"id":"24117"}},"id":"24116","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"24169","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"24136"},"glyph":{"id":"24137"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24139"},"nonselection_glyph":{"id":"24138"},"view":{"id":"24141"}},"id":"24140","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"24228","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"24160"},"glyph":{"id":"24161"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24163"},"nonselection_glyph":{"id":"24162"},"view":{"id":"24165"}},"id":"24164","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"24113","type":"Circle"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"24254"},"selection_policy":{"id":"24253"}},"id":"24118","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24174","type":"Line"},{"attributes":{},"id":"24248","type":"Selection"},{"attributes":{"source":{"id":"24112"}},"id":"24117","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24120","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"24278"},"selection_policy":{"id":"24277"}},"id":"24190","type":"ColumnDataSource"},{"attributes":{},"id":"24056","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"24172"},"glyph":{"id":"24173"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24175"},"nonselection_glyph":{"id":"24174"},"view":{"id":"24177"}},"id":"24176","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24118"}},"id":"24123","type":"CDSView"},{"attributes":{"callback":null},"id":"24070","type":"HoverTool"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"24248"},"selection_policy":{"id":"24247"}},"id":"24100","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"24272"},"selection_policy":{"id":"24271"}},"id":"24172","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24127","type":"Line"},{"attributes":{"source":{"id":"24160"}},"id":"24165","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24180","type":"Line"},{"attributes":{},"id":"24064","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"24106"},"glyph":{"id":"24107"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24109"},"nonselection_glyph":{"id":"24108"},"view":{"id":"24111"}},"id":"24110","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"24178"},"glyph":{"id":"24179"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24181"},"nonselection_glyph":{"id":"24180"},"view":{"id":"24183"}},"id":"24182","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24136"}},"id":"24141","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"24115","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24143","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24175","type":"Line"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"24072","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24163","type":"Line"},{"attributes":{},"id":"24236","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24084","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"24097","type":"Circle"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"24262"},"selection_policy":{"id":"24261"}},"id":"24142","type":"ColumnDataSource"},{"attributes":{"source":{"id":"24166"}},"id":"24171","type":"CDSView"},{"attributes":{"source":{"id":"24094"}},"id":"24099","type":"CDSView"},{"attributes":{"source":{"id":"24154"}},"id":"24159","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"24276"},"selection_policy":{"id":"24275"}},"id":"24184","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"24236"},"group":null,"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"24237"},"ticker":{"id":"24230"}},"id":"24059","type":"LinearAxis"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"24284"},"selection_policy":{"id":"24283"}},"id":"24208","type":"ColumnDataSource"},{"attributes":{},"id":"24266","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24085","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24138","type":"Line"},{"attributes":{"source":{"id":"24178"}},"id":"24183","type":"CDSView"},{"attributes":{"ticks":[1.275]},"id":"24230","type":"FixedTicker"},{"attributes":{},"id":"24272","type":"Selection"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"24260"},"selection_policy":{"id":"24259"}},"id":"24136","type":"ColumnDataSource"},{"attributes":{"source":{"id":"24106"}},"id":"24111","type":"CDSView"},{"attributes":{"overlay":{"id":"24072"}},"id":"24067","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"24186","type":"Circle"},{"attributes":{"axis":{"id":"24055"},"coordinates":null,"group":null,"ticker":null},"id":"24058","type":"Grid"},{"attributes":{"axis":{"id":"24059"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"24062","type":"Grid"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"24131","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"24096","type":"Circle"},{"attributes":{},"id":"24265","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"24154"},"glyph":{"id":"24155"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24157"},"nonselection_glyph":{"id":"24156"},"view":{"id":"24159"}},"id":"24158","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24121","type":"Line"},{"attributes":{"source":{"id":"24124"}},"id":"24129","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"24071","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24139","type":"Line"},{"attributes":{"source":{"id":"24184"}},"id":"24189","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"24142"},"glyph":{"id":"24143"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24145"},"nonselection_glyph":{"id":"24144"},"view":{"id":"24147"}},"id":"24146","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"24185","type":"Circle"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"24244"},"selection_policy":{"id":"24243"}},"id":"24088","type":"ColumnDataSource"},{"attributes":{},"id":"24271","type":"UnionRenderers"},{"attributes":{},"id":"24283","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24109","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24144","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24173","type":"Line"},{"attributes":{"source":{"id":"24100"}},"id":"24105","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"24167","type":"Circle"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"24086"},{"id":"24092"},{"id":"24098"},{"id":"24104"},{"id":"24110"},{"id":"24116"},{"id":"24122"},{"id":"24128"},{"id":"24134"},{"id":"24140"},{"id":"24146"},{"id":"24152"}]},"id":"24233","type":"LegendItem"},{"attributes":{},"id":"24267","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24137","type":"Line"},{"attributes":{},"id":"24242","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"24148"},"glyph":{"id":"24149"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24151"},"nonselection_glyph":{"id":"24150"},"view":{"id":"24153"}},"id":"24152","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24102","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24191","type":"Line"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"24158"},{"id":"24164"},{"id":"24170"},{"id":"24176"},{"id":"24182"},{"id":"24188"},{"id":"24194"},{"id":"24200"},{"id":"24206"},{"id":"24212"},{"id":"24218"},{"id":"24224"}]},"id":"24234","type":"LegendItem"},{"attributes":{},"id":"24287","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"24063"},{"id":"24064"},{"id":"24065"},{"id":"24066"},{"id":"24067"},{"id":"24068"},{"id":"24069"},{"id":"24070"}]},"id":"24073","type":"Toolbar"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24155","type":"Line"},{"attributes":{"source":{"id":"24172"}},"id":"24177","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"24266"},"selection_policy":{"id":"24265"}},"id":"24154","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"24082"},"glyph":{"id":"24083"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24085"},"nonselection_glyph":{"id":"24084"},"view":{"id":"24087"}},"id":"24086","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24089","type":"Line"},{"attributes":{"data":{},"selected":{"id":"24246"},"selection_policy":{"id":"24245"}},"id":"24094","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24157","type":"Line"},{"attributes":{},"id":"24286","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"24133","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24161","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"24088"},"glyph":{"id":"24089"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24091"},"nonselection_glyph":{"id":"24090"},"view":{"id":"24093"}},"id":"24092","type":"GlyphRenderer"},{"attributes":{},"id":"24244","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24192","type":"Line"},{"attributes":{},"id":"24243","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"24073"}],"tools":[{"id":"24063"},{"id":"24064"},{"id":"24065"},{"id":"24066"},{"id":"24067"},{"id":"24068"},{"id":"24069"},{"id":"24070"}]},"id":"24293","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"24132","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"24187","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"24252"},"selection_policy":{"id":"24251"}},"id":"24112","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"24151","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"24118"},"glyph":{"id":"24119"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24121"},"nonselection_glyph":{"id":"24120"},"view":{"id":"24123"}},"id":"24122","type":"GlyphRenderer"},{"attributes":{"source":{"id":"24082"}},"id":"24087","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"24130"},"glyph":{"id":"24131"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24133"},"nonselection_glyph":{"id":"24132"},"view":{"id":"24135"}},"id":"24134","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24101","type":"Line"},{"attributes":{"overlay":{"id":"24071"}},"id":"24065","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24108","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"24209","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24090","type":"Line"},{"attributes":{},"id":"24237","type":"AllLabels"},{"attributes":{"data":{},"selected":{"id":"24258"},"selection_policy":{"id":"24257"}},"id":"24130","type":"ColumnDataSource"},{"attributes":{},"id":"24284","type":"Selection"},{"attributes":{},"id":"24053","type":"LinearScale"},{"attributes":{},"id":"24285","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"24166"},"glyph":{"id":"24167"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24169"},"nonselection_glyph":{"id":"24168"},"view":{"id":"24171"}},"id":"24170","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"24149","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"24184"},"glyph":{"id":"24185"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24187"},"nonselection_glyph":{"id":"24186"},"view":{"id":"24189"}},"id":"24188","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24126","type":"Line"},{"attributes":{},"id":"24288","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"24114","type":"Circle"},{"attributes":{"children":[[{"id":"24046"},0,0]]},"id":"24292","type":"GridBox"},{"attributes":{},"id":"24063","type":"ResetTool"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"24145","type":"Line"}],"root_ids":["24295"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"c012b0b0-f5a6-453e-9150-c108b257eb2c","root_ids":["24295"],"roots":{"24295":"05a75b3e-0ca7-4f1a-921b-b2cd6f917670"}}];
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