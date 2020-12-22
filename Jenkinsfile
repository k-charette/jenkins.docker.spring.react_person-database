pipeline {
    agent none
    stages {
        stage('Initial Run') {
            parallel {
                stage('Front End Dependencies') {
                    agent {
                        docker {
                            image 'node:lts-alpine3.12' 
                            args '-v /root/.m2:/root/.m2 -p 3000:3000' 
                        }
                    }
                    stages {
                        stage('Set Up') {
                            steps {
                                script {
                                    sh 'rm -rf jenkins.docker.spring.react_person-database'
                                }
                            }   
                        }
                        stage('SCM Checkout') {
                            steps {
                                sh 'git clone https://github.com/k-charette/jenkins.docker.spring.react_person-database $PWD/jenkins.docker.spring.react_person-database'        
                            }
                        }
                        stage('Build') {
                            steps {
                                script {
                                    dir('$PWD/jenkins.docker.spring.react_person-database/client') {
                                        sh "npm install"
                                        sh "npm start"
                                    }
                                }
                            }
                        }
                    }
                }
               
            }
        }
    }
}