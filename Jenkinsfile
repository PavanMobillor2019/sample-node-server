pipeline {
    agent {
        docker {
            image 'node:12-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
               sh 'npm install --cache="./cacheNode"'
            }
        }
       
        stage('Deliver') { 
            steps {
                sh 'node app.js' 
            }
        }
    }
}
