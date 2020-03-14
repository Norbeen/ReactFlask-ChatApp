import os, flask, flask_socketio

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

@app.route("/")

def hello():
    return "hello, world!"
    
@socketio.on('connect')
def on_connect():
    socketio.emit("hey client", {
        'connect message': "hey server"
    })
    
@socketio.on('disconnect')
def on_disconnect(data):
    socketio.emit('disconnecting', {
        'disconnect status': data["I am disconnecting"]
    })
    
@socketio.on('new message')
def on_new_message(data):
    socketio.emit('got your message', {
        'your message': data['my message']
    })

    
@socketio.on('google-token')
def get_token(data):
    socketio.emit('google token', {
        'token': data['token']
    })

@socketio.on('test message')
def on_test_message(data):
    socketio.emit('got test message', {
        'my test message': data['my test message']
    })

if __name__ == '__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )


