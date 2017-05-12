<?php 
 
        //Google cloud messaging GCM-API url
        $url = 'https://android.googleapis.com/gcm/send';
        $fields = array(
            'registration_ids' => 'A8C63EAB0F4F2FEF',
            'data' => 'Teste',
        );
        // Update your Google Cloud Messaging API Key
        define("GOOGLE_API_KEY", "AIzaSyC8GRTQSCJQg9jmxym5Iwjtya91A5BI0mc");         
        $headers = array(
            'Authorization: key=AIzaSyC8GRTQSCJQg9jmxym5Iwjtya91A5BI0mc',
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);   
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);               
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }
        curl_close($ch);
        echo $result;
 

?>