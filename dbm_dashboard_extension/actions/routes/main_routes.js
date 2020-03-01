module.exports = {
    //----------------------------------------------------------------------------------
    // Used to set the name of the mod / extension. 
    // Note if this is an extension it cant have a space or it will not work.
    name: "Main Route",
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // Here you can configure what section you want your mod to show up on the dashboard / admin panel. 
    // If this is an extension or route mod you can leave this blank.
    section: "",
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // true if this is a mod for the dashboard.
    dashboardMod: false,
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // true if this is a mod for the admin panel.
    adminMod: false,
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // true if this is a mod for routes.
    routeMod: true,
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // If this route mod will only have 1 url you can set the url here. 
    // If not you will need to create your own routes in the run section.
    routeUrl: '',
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // Toggle this if you are creating a extension.
    extensionMod: false,
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // You can put your name here or whoever it was created by.
    author: "Great Plains Modding",
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // Here you define the version of the mod / extension.
    version: "1.0.0",
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // You can set the mods description. 
    // You only need this if its a mod for the admin panel or dashboard.
    short_description: "",
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // If this is for a mod and you want to add custom html to the mod set this to true.
    // If you are using this as a custom route you can leave this true or false as it will still pull the custom html.
    customHtml: false,
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // Change the width of the popup for mods.
    size: function () {
        return {
            width: 700
        };
    },
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // Here you can add your custom html! 
    // Note if customHtml is set to false this will now show up. 
    // This is also valid bootstrap. Also note that this html code will be placed inside of <form> so if you want to retrieve the data all you need to do is add the fields.
    // Also if you are using this mod for a custom route you can place your html code here and this is what will show up on the page. 
    // Note this is not inside of form tags if this is a custom route.
    html: function () {
        return ``
    },
    //----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    // This is used to move on to the next action. 
    // When the code is ran it will return to the dashboard but if you want to redirect you need to set this to false.
    next: true,
    //----------------------------------------------------------------------------------


    //----------------------------------------------------------------------------------
    // Whenever the command is executed this is the code that will be ran. 
    // You can use req to get stuff, note this only works if you add custom html. 
    run: async (app, config, DBM, client, req, res, server) => {
<<<<<<< HEAD
        let Dashboard = DBM.Dashboard
        client = DBM.Bot.bot
=======
        client = DBM.Bot.bot
        const {dashboardConfig} = require('../../functions.js')
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        app.get('/', function (req, res) {
            res.render('homePage', {
                config: config,
                client: DBM.Bot.bot,
<<<<<<< HEAD
                theme: Dashboard.theme()
=======
                theme: theme()
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
            });
        });

        app.get('/dashboard/@me', checkAuth, function (req, res) {
            res.render('servers', {
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                user: req.user,
                config: config,
                client: DBM.Bot.bot,
<<<<<<< HEAD
                theme: Dashboard.theme()
=======
                theme: theme()
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
            });
        });

        app.get('/dashboard/@me/servers/:guildID', checkAuth, function (req, res) {
            let serv = client.guilds.get(req.params.guildID);
            if (!serv) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${DBM.Bot.bot.user.id}&scope=bot&permissions=2146958591&guild_id=${req.params.guildID}`);
            let dashboardMods = [];
<<<<<<< HEAD
            Dashboard.actions.forEach(data => {
=======
            app.actions.forEach(data => {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                if (data.dashboardMod == true) {
                    dashboardMods.push(data);
                }
            });
<<<<<<< HEAD
            let section = []
            Dashboard.actions.forEach(action => {
=======
            let actions = app.actions;
            let section = []
            actions.forEach(action => {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                if (!section.includes(action.section) && action.routeMod == false && action.dashboardMod == true) {
                    section.push(action.section)
                }
            });
            if (!DBM.Bot.bot.log) DBM.Bot.bot.log = 'Command Executed';
            res.render('dashboardPanel', {
                client: DBM.Bot.bot,
                server: serv,
                dashboardMods: dashboardMods,
                customHtml: false,
                log: DBM.Bot.bot.log,
                config: config,
<<<<<<< HEAD
                commandExecuted: Dashboard.actionsExecuted.get(req.user.id).dashboardCommandExecuted,
                theme: Dashboard.theme(),
=======
                commandExecuted: DBM.actionsExecuted.get(req.user.id).dashboardCommandExecuted,
                theme: theme(),
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                sections: section
            });
            dashboardCommandExecuted(req, false);
        });

        app.get('/dashboard/@me/servers/:guildID/:action', checkAuth, function (req, res) {
            let serv = client.guilds.get(req.params.guildID);
            if (!serv) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${DBM.Bot.bot.user.id}&scope=bot&permissions=2146958591&guild_id=${req.params.guildID}`);
            var action = req.params.action;
<<<<<<< HEAD
            let data = Dashboard.actions.get(action);
            let dashboardMods = [];
            Dashboard.actions.forEach(data => {
                if (data.dashboardMod == true) dashboardMods.push(data)
            });
            let section = []
            Dashboard.actions.forEach(action => {
=======
            let data = app.actions.get(action);
            let dashboardMods = [];
            app.actions.forEach(data => {
                if (data.dashboardMod == true) dashboardMods.push(data)
            });
            let actions = app.actions;
            let section = []
            actions.forEach(action => {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                if (!section.includes(action.section) && action.routeMod == false && action.dashboardMod == true) {
                    section.push(action.section)
                }
            });
            res.render('dashboardPanel', {
                dashboardMods: dashboardMods,
<<<<<<< HEAD
                commandExecuted: Dashboard.actionsExecuted.get(req.user.id).dashboardCommandExecuted,
=======
                commandExecuted: DBM.actionsExecuted.get(req.user.id).dashboardCommandExecuted,
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                customHtml: data.customHtml,
                action: data,
                log: DBM.Bot.bot.log,
                client: DBM.Bot.bot,
                config: config,
                server: serv,
<<<<<<< HEAD
                theme: Dashboard.theme(),
=======
                theme: theme(),
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                sections: section
            });
            dashboardCommandExecuted(req, false);
        });

        app.get('/dashboard/admin', checkAuthOwner, function (req, res) {
<<<<<<< HEAD
            let config = Dashboard.dashboardConfig();
            let dashboardMods = [];
            Dashboard.actions.forEach(data => {
                if (data.adminMod == true) dashboardMods.push(data)
            });
            if (!DBM.Bot.bot.log) DBM.Bot.bot.log = 'Command Executed';
            let actions = Dashboard.actions;
=======
            let config = dashboardConfig();
            let dashboardMods = [];
            app.actions.forEach(data => {
                if (data.adminMod == true) dashboardMods.push(data)
            });
            if (!DBM.Bot.bot.log) DBM.Bot.bot.log = 'Command Executed';
            let actions = app.actions;
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
            let section = [];
            let extensions = [];
            actions.forEach(action => {
                if (!section.includes(action.section) && action.routeMod == false && action.adminMod == true) {
                    section.push(action.section);
                };
            });
            actions.forEach(action => {
                if (action.extensionMod) {
                    extensions.push(action);
                };
            });
            res.render('adminPanel', {
                dashboardMods: dashboardMods,
<<<<<<< HEAD
                commandExecuted: Dashboard.actionsExecuted.get(req.user.id).adminCommandExecuted,
=======
                commandExecuted: DBM.actionsExecuted.get(req.user.id).adminCommandExecuted,
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                customHtml: false,
                log: DBM.Bot.bot.log,
                client: DBM.Bot.bot,
                config: config,
<<<<<<< HEAD
                theme: Dashboard.theme(),
=======
                theme: theme(),
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                sections: section,
                extensions: extensions,
                app: app
            });
            if (req.user.commandExecuted) DBM.Bot.bot.log = 'Command Executed';
<<<<<<< HEAD
            Dashboard.adminCommandExecuted(req, false);
=======
            adminCommandExecuted(req, false);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        });


        app.get('/dashboard/admin/:action', checkAuthOwner, function (req, res) {
            var action = req.params.action;
<<<<<<< HEAD
            let data = Dashboard.actions.get(action);
            let dashboardMods = [];
            Dashboard.actions.forEach(data => {
                if (data.adminMod == true) dashboardMods.push(data)
            });
            let section = [];
            let extensions = [];
            Dashboard.actions.forEach(action => {
=======
            let data = app.actions.get(action);
            let dashboardMods = [];
            app.actions.forEach(data => {
                if (data.adminMod == true) dashboardMods.push(data)
            });
            let actions = app.actions;
            let section = [];
            let extensions = [];
            actions.forEach(action => {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                if (!section.includes(action.section) && action.routeMod == false && action.adminMod == true) {
                    section.push(action.section)
                }
            });
<<<<<<< HEAD
            Dashboard.actions.forEach(action => {
=======
            actions.forEach(action => {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                if (action.extensionMod) {
                    extensions.push(action);
                };
            });
            res.render('adminPanel', {
                dashboardMods: dashboardMods,
                commandExecuted: false,
                customHtml: true,
                action: data,
                log: DBM.Bot.bot.log,
                client: DBM.Bot.bot,
                config: config,
<<<<<<< HEAD
                theme: Dashboard.theme(),
=======
                theme: theme(),
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                sections: section,
                extensions: extensions,
                app: app
            });
<<<<<<< HEAD
            Dashboard.adminCommandExecuted(req, false);
=======
            adminCommandExecuted(req, false);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        });
        //app, config, DBM, dashboardConfig, client
        app.post('/api/execute/:action', checkAuthOwner, function (req, res) {
            var next = req.query['next'];
            if (!next) next = false;
            var action = req.params.action;
<<<<<<< HEAD
            let data = Dashboard.actions.get(action);
=======
            let data = app.actions.get(action);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
            let serv;
            if (data.customHtml) {
                if (next == 'true') {
                    data.run(app, config, DBM, DBM.Bot.bot, req, res, serv);
                    if (data.next) {
<<<<<<< HEAD
                        Dashboard.adminCommandExecuted(req, true);
=======
                        adminCommandExecuted(req, true);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                        res.redirect('/dashboard/admin');
                    };
                } else {
                    res.redirect(`/dashboard/admin/${data.name}`);
                };
            } else {
                data.run(app, config, DBM, DBM.Bot.bot, req, res, serv);
                if (data.next) {
<<<<<<< HEAD
                    Dashboard.adminCommandExecuted(req, true);
=======
                    adminCommandExecuted(req, true);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                    res.redirect('/dashboard/admin');
                };
            };
        });

        app.post('/dashboard/@me/servers/:guildID/execute/:action', checkAuth, function (req, res) {
            var next = req.query['next'];
            if (!next) next = false;
            var action = req.params.action;
<<<<<<< HEAD
            let data = Dashboard.actions.get(action);
=======
            let data = app.actions.get(action);
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
            let serv = client.guilds.get(req.params.guildID);

            if (data.customHtml) {
                if (next == 'true') {
                    data.run(app, config, DBM, DBM.Bot.bot, req, res, serv);
                    if (data.next) {
                        dashboardCommandExecuted(req, true);
                        res.redirect(`/dashboard/@me/servers/${serv.id}`);
                    };
                } else {
                    res.redirect(`/dashboard/@me/servers/${serv.id}/${data.name}`);
                };
            } else {
                data.run(app, config, DBM, DBM.Bot.bot, req, res, serv);
                if (data.next) {
                    dashboardCommandExecuted(req, true);
                    res.redirect(`/dashboard/@me/servers/${serv.id}/${data.name}`);
                };
            };
        });
<<<<<<< HEAD
=======
  console.log(require("path").join(__dirname, "../../", "config.json"))
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        app.post('/api/admin/web', checkAuthOwner, function (req, res) {
            const dashboardConfigPath = require("path").join(__dirname, "../extensions", "config.json");
            let config = dashboardConfig();

            config.featureOne.name = req.body.featureOneName;
            config.featureOne.description = req.body.featureOneDescription;
            config.featureTwo.name = req.body.featureTwoName;
            config.featureTwo.description = req.body.featureTwoDescription;
            config.featureThree.name = req.body.featureThreeName;
            config.featureThree.description = req.body.featureThreeDescription;
            config.featureFour.name = req.body.featureFourName;
            config.featureFour.description = req.body.featureFourDescription;
            config.footerText = req.body.footerText;
            config.introText = req.body.introText;

            let settings = JSON.stringify(config);
            require("fs").writeFileSync(dashboardConfigPath, settings, "utf8");
            res.redirect('/')
        })
<<<<<<< HEAD
=======

>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        function checkAuth(req, res, next) {
            if (req.isAuthenticated()) {
                return next()
            }
            res.redirect('/login');
        }

        function checkAuthOwner(req, res, next) {
            if (req.isAuthenticated()) {
<<<<<<< HEAD
                if (req.user.id == Dashboard.config.owner) {
=======
                if (req.user.id == config.owner) {
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
                    next();
                } else res.redirect('/dashboard/@me');
            } else res.redirect('/login');
        }

<<<<<<< HEAD
        function dashboardCommandExecuted (req, dashboardCommandExecuted) {
            let data = { dashboardCommandExecuted: dashboardCommandExecuted }
            Dashboard.actionsExecuted.set(req.user.id, data);
        }
    
        adminCommandExecuted = function (req, commandExecuted) {
            let data = { adminCommandExecuted: commandExecuted }
            Dashboard.actionsExecuted.set(req.user.id, data);
=======
        function adminCommandExecuted(req, commandExecuted) {
            let data = { adminCommandExecuted: commandExecuted }
            DBM.actionsExecuted.set(req.user.id, data);
        };

        function dashboardCommandExecuted(req, dashboardCommandExecuted) {
            let data = { dashboardCommandExecuted: dashboardCommandExecuted }
            DBM.actionsExecuted.set(req.user.id, data);
        };

        function theme() {
            let theme = app.themes.get(config.theme);
            return theme
>>>>>>> b803b6e15b63e1f95567e7b35bebfceceeb91793
        }
    }
    //----------------------------------------------------------------------------------
}
