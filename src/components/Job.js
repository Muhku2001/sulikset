import React from 'react' 
 
 
function Job({ job, onCompleted }) {
    
    const handleCompleted = () => 
        console.log('käsittelen saamaani tietoa')
        //onCompleted(job);
        {
        
    }
    return ( 
 
 
        <table> 
            <tbody> 
                <tr> 
                    <td width="1%"> 
                        <input type="checkbox"></input> 
                    </td> 
                    <td width="59%"> 
                        {job.tyotehtava} 
                    </td>
                    <td width="20%">   {job.osoite} 
                    </td> 
 
 
                    <td width="20%"> 
                        <a href={job.linkki} >LISÄTIETOA</a> 
                    </td> 
                </tr> 
            </tbody> 
        </table > 
 
 
    ) 
} 
 
 
 
 
export default Job; 