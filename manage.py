from flask.ext.script import Manager

from bcc_nav import app

manager = Manager(app)


@manager.command
def debug():
    app.run(debug=True)



if __name__ == "__main__":
    manager.run()
