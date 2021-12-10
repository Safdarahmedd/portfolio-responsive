pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "source ~/myv/bin/activate"
                sh "npm install"
                sh "npm start"
            }
        }
    }
}
