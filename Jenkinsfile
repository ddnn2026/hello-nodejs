pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'SECONDS')
    }
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
            }
        }
    }
    stages {
        stage('Example') {
            steps {
                git 'https://github.com/ddnn2026/hello-nodejs.git'
            }
        }
    }
}