this.VelhaMania.module('HomeApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Layout = Marionette.LayoutView.extend({
    template: 'apps/home/show/templates/layout',
    regions: {
      formRegion: '.form-region'
    }
  });

  Show.FormView = Marionette.FormView.extend({
    className: 'login',
    template: 'apps/home/show/templates/login',
    behaviors: {
      "Form": {}
    },
    fields: {
        email: {
            el: '.email',
            required: "Preencha seu email",
            validations: {
                email: "Não corresponde a um formato de email."
            }
        }
    }
  });
});
