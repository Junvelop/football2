from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/save_data', methods=['POST'])
def save_data():
    data = request.get_json()

    # 여기에서 받은 데이터를 저장하거나 원하는 동작을 수행합니다.
    # 예를 들어, 파일에 저장할 수 있습니다.
    with open('saved_data.txt', 'w') as file:
        file.write(str(data))

    return jsonify({'message': '데이터가 성공적으로 저장되었습니다.'})

if __name__ == '__main__':
    app.run(debug=True)
