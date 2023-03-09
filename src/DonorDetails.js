import './DonorDetails.css';

function Donor() {
    return (
        <div className='request-order'>
        <form>
        <div className='form-group'>
            <label className='request-title'>Agent</label>:
            <label className='request-data'>Rajiv, @userrotaract</label>
        </div>
        <div className='form-group'>
            <label className='request-title'>Phone</label>:
            <label className='request-data'>9816066893</label>
        </div>
        <div className='form-group'>
            <label className='request-title'>Location</label>:
            <label className='request-data'>Hattiban,Lalitpur</label>

        </div>
          <div className='form-group'>
            <label className='request-title'>Received</label>:
            <label className='request-data'>15</label>

        </div>
        
    </form>
        </div>
    );
}
export default Donor;