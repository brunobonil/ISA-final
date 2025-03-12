#!/usr/bin/env groovy
#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }
    
    stage('build and test') {
        // Use sh to run docker directly instead of using the Docker DSL
        sh """
        docker run --rm \
        -u jhipster \
        -e MAVEN_OPTS="-Duser.home=./" \
        -v "\$(pwd)":/home/jhipster/app \
        -w /home/jhipster/app \
        jhipster/jhipster:v8.6.0 \
        sh -c "java -version && \
        chmod +x mvnw && \
        ./mvnw -ntp clean -P-webapp && \
        ./mvnw -ntp checkstyle:check && \
        ./mvnw -ntp com.github.eirslett:frontend-maven-plugin:install-node-and-npm@install-node-and-npm && \
        ./mvnw -ntp com.github.eirslett:frontend-maven-plugin:npm && \
        ./mvnw -ntp verify -P-webapp -Pprod -DskipTests"
        """
        
        archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
    }
    
    stage('publish docker') {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-login', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
            sh """
            ./mvnw -ntp jib:build \
            -Djib.to.auth.username=${DOCKER_REGISTRY_USER} \
            -Djib.to.auth.password=${DOCKER_REGISTRY_PWD}
            """
        }
    }
}
