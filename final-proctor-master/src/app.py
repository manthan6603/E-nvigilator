# app.py
from flask import Flask, jsonify
from flask_socketio import SocketIO
import threading as th
import audio
import head_pose
import detection
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
socketio = SocketIO(app)

def start_proctoring():
    head_pose_thread = th.Thread(target=head_pose.pose)
    audio_thread = th.Thread(target=audio.sound)
    detection_thread = th.Thread(target=detection.run_detection)

    head_pose_thread.start()
    audio_thread.start()
    detection_thread.start()

    head_pose_thread.join()
    audio_thread.join()
    detection_thread.join()

@app.route('/start_proctoring', methods=['POST'])
def start_proctoring_api():
    proctoring_thread = th.Thread(target=start_proctoring)
    proctoring_thread.start()
    return jsonify({'message': 'Proctoring started successfully'})

if __name__ == '__main__':
    app.run(debug=True)
