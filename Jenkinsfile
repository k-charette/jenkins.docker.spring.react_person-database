pipeline {
    agent none
    stages {
        stage('Initial Run') {
            parallel {
                 stage('Back End Dependencies') {
                    agent {
                        docker {
                            image 'jamesdbloom/docker-java8-maven:latest' 
                            args '-v /root/.m2:/root/.m2 -p 8050:8050' 
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
                        stage('Compile-Package-Test') {
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
                stage('Front End Dependencies') {
                    agent {
                        docker {
                            image 'timbru31/node-alpine-git:latest' 
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
                                        pause
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