# Decision on placement of 5 different cases.
1. def test_server_sends_hello(self):
        r = requests.get(self.get_server_url())
        self.assertEquals(r.text, 'hello, world!') 
* The reason I used this test was beacause I wanted to make sure the app was running without any error.

2. def test_server_connecting(self):
        client =app.socketio.test_client(app.app)
        
        response = client.get_received()
        
        self.assertEqual(len(response), 1)
        from_server_connect = response[0]
        self.assertEqual(from_server_connect['name'], "hey client")
        
        data = from_server_connect['args'][0]
        self.assertEqual(data['connect message'], "hey server")
        
* The reason I chose this test was to make sure that there was communication between the server and the client.

3. def test_google_token(self):
        client = app.socketio.test_client(app.app)
        client.emit('google-token', {'token': 'this is token'})
        response = client.get_received()
        self.assertEqual(len(response), 2)
        
        from_server = response[1]
        self.assertEqual(from_server['name'], 'google token')
        
        data = from_server['args'][0]
        self.assertEqual(data['token'], 'this is token')
* The reason I chose the test above was to make sure the google token was successfully take in from client to the server.

4. def test_JarvisfoodNear(self):
        response = ChatBot.Bot("nabin","!! Jarvis food near me")
        self.assertEqual(response[1], resName + " " + resUrl)
        
* The reason I used the above test was to make sure the yelp api was spitting out the location and link of the nearest restaurant.


5. def test_jokes(self):
        response = ChatBot.Bot("nabin","!! jokes")
        self.assertEqual(response[1], jokeList[randNum])
        
* The above test was to make sure that with !! jokes command, it gave a random joke everytime a user gave the command. 

# Explanation of any additional test or considerations for future

* I wanted to test the database also using different test cases, but due to time constraint I wasn't able to do so. If I had time, I would have tested google login verifications and token receiving in real time.


# To run it in your local machine(for flask setup):

* python3 -m venv venv (To create a virtual environment)
* source venv/bin/activate (activate the virtual environment)
* pip install -r requirements.txt (install all the required libraries)

# To run it in your local machine(for react babel setup):
* npm install (install all dependencies)
* npm install @babel/preset-env --save-dev (save babel)
* npm run watch (to run the react app)


