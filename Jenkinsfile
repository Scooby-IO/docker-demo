def  appName = 'docker-demo'
def  svcName = "${appName}-${env.BRANCH_NAME}"
def  clusterName = "${env.CLUSTER_NAME}"
boolean  isPullRequest = "${env.CHANGE_ID}" != 'null'
boolean isFeatureBranch = !isPullRequest && "${env.BRANCH_NAME}" != 'master'

pipeline {
  
   stages {

    // At least one stage is required.
     stage("Build"){
       steps {

         script {
           
          dockerTag = "${appName}-${env.BRANCH_NAME}-${GIT_COMMIT}"
          sh("docker build -t docker-demo .")
          release = "$dockerTag".toLowerCase()

          } //script
         } // steps
       } //stage

     
   } //Stages
}//Pipeline
