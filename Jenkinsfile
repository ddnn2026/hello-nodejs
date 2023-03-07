pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Clone') {
            steps {
                git 'https://github.com/ddnn2026/hello-nodejs.git'
            }
        }
    }
}