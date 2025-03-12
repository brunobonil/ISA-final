#!/usr/bin/env groovy
pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('build and test') {
            agent {
                docker {
                    image 'jhipster/jhipster:v8.6.0'
                    args '-u jhipster -e MAVEN_OPTS="-Duser.home=./"'
                }
            }
            steps {
                sh "java -version"
                sh "chmod +x mvnw"
                sh "./mvnw -ntp clean -P-webapp"
                sh "./mvnw -ntp checkstyle:check"
                sh "./mvnw -ntp com.github.eirslett:frontend-maven-plugin:install-node-and-npm@install-node-and-npm"
                sh "./mvnw -ntp com.github.eirslett:frontend-maven-plugin:npm"
                sh "./mvnw -ntp verify -P-webapp -Pprod -DskipTests"
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }
        
        stage('publish docker') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-login', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
                    sh """
                    ./mvnw -ntp jib:build \
                    -Djib.to.auth.username=${DOCKER_REGISTRY_USER} \
                    -Djib.to.auth.password=${DOCKER_REGISTRY_PWD}
                    """
                }
            }
        }
    }
}
