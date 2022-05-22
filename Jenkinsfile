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
                sh '/home/jenkins/workspace/pipeline_node_docker_1@tmp/durable-29d688d2/script.sh' 
            }
        }
    }
}
