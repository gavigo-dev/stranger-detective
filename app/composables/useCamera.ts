export function useCamera() {
    async function requestCameraPermission() {
        try {
            if (import.meta.server) return
            const constraints = { video: true, audio: false }
            const stream = await navigator.mediaDevices.getUserMedia(constraints)
            stream?.getTracks().forEach((track) => track.stop())
        } catch (error: any) {
            // Handle cases where the user denies permission or an error occurs
            if (error?.name === 'NotAllowedError') {
                console.error('Permission denied by user')
            } else if (error?.name === 'NotFoundError') {
                console.error('No camera found on the device')
            } else {
                console.error(`getUserMedia error: ${error?.name}`, error)
            }

            alert(error.message)
        }
    }

    return {
        requestCameraPermission
    }
}
