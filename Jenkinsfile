pipeline {
    agent none
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
        stage('Front-End') {
            agent {
                docker { 
                    image 'timbru31/node-alpine-git:latest' 
                }
            }
            steps {
                script {
                    dir('$PWD/jenkins.docker.spring.react_person-database/client') {
                        sh "npm install"
                        sh "npm start"
                    }
                }
            }
        }       
        stage('Compile-Package-Test') {
            agent {
                docker {
                    image 'jamesdbloom/docker-java8-maven:latest' 
                    args '-v /root/.m2:/root/.m2' 
                }
            }
            steps {
                script {
                    dir('$PWD/jenkins.docker.spring.react_person-database') {
                        sh "mvn spring-boot:run"
                    }
                }
            }
        }
    }
}

