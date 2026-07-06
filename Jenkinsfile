pipeline{
    agent{
        label 'docker'
    }
    
    stages{
        stage('Build'){
            steps{
                sh 'docker build -t revise-reactproject-test -f Dockerfile.dev .'
            }
        }

        stage('Test'){
            steps{
                sh 'docker run -e CI=true revise-reactproject-test npm test'
            }
        }
    }
}