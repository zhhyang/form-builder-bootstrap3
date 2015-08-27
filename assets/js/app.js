define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", 
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , inputJSON, radioJSON, selectJSON, buttonsJSON
  , renderTab, aboutTab
){
  return {
    initialize: function(){

      //Bootstrap tabs from json.
      new TabView({
    	id: 'Input',
        title: "输入框"
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
    	id: 'Radio',
        title: "单选框 /复选框"
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        id: 'Select',
        title: "Select"
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        id: 'Button',
        title: "Button"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
    	id: 'Rendered',
        title: "Rendered"
        , content: renderTab
      });
      new TabView({
        id: 'About',
        title: "About"
        , content: aboutTab
      });

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
      /**
       * modify by hongyang
       */
      $("#render").attr("disabled","disabled");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection([
          { "title" : "Form Name"
            , "fields": {
              "name" : {
                "label"   : "表单名称"
                , "type"  : "input"
                , "value" : "表单名称"
              }
            }
          }
        ])
      });
    }
  }
});
