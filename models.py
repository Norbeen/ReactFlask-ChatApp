# models.py
import os, flask_sqlalchemy, app

# app.app = app modules app variable
app.app.config['SQLALCHEMY_DATABASE_URI']  = os.getenv('DATABASE_URL')
# app.app.config['SQLALCHEMY_DATABASE_URI']  = 'postgresql://nabin:baltimore@localhost/postgres'
db = flask_sqlalchemy.SQLAlchemy(app.app)


class chatMessage(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Uname = db.Column(db.String(30))
    Umessage = db.Column(db.String(300))
    Uimage = db.Column(db.String(300))
    
    def __init__(self, name, message, image):
        self.Uname = name
        self.Umessage = message
        self.Uimage = image
        
    def __repr__(self):
        # return '<Message user_name: %s>' % self.user_name
        return "{'user name':'%s', 'user message':'%s', 'user message':'%s'}" % (self.Uname, self.Umessage, self.Uimage)