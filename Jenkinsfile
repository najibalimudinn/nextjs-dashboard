pipeline {
    agent any

    environment {
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy') {
            steps {
                withCredentials([file(credentialsId: 'nextjs-dashboard-env', variable: 'SECRET_ENV_FILE')]) {
                    script {
                        sh """
                        echo "Menyiapkan environment variables..."
                        # Salin file .env rahasia dari vault Jenkins ke workspace proyek ini
                        cp \$SECRET_ENV_FILE .env

                        echo "Menghentikan container versi sebelumnya (jika ada)..."
                        docker compose down

                        echo "Membangun image Docker baru dengan tag \${IMAGE_TAG}..."
                        # Export IMAGE_TAG agar dibaca oleh compose.yaml
                        export IMAGE_TAG=\${IMAGE_TAG}
                        docker compose build

                        echo "Menjalankan container baru..."
                        docker compose up -d
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh "docker image prune -f || true"
                
                sh "rm -f .env"
            }
        }
        success {
            echo "Deployment berhasil! Aplikasi Next.js berjalan di background."
        }
        failure {
            echo "Pipeline gagal. Silakan cek log Jenkins untuk detail error."
        }
    }
}