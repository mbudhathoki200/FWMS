import './Donations.css';

function Donations() {
    return (
        <div className='request-order'>
            <form>
                <div className='form-group'>
                    <label className='request-title'>From</label>:
                    <label className='request-data'>Donar, @user022</label>
                </div>
                <div className='form-group'>
                    <label className='request-title'>Title</label>:
                    <label className='request-data'>Tomatoes</label>
                </div>
                <div className='form-group'>
                    <label className='request-title'>Description</label>:
                    <label className='request-data description'>A meal made of tomatoes and fried vegetables</label>

                </div>
                <div className='form-group multi-group'>
                    <div>
                        <label className='request-title'>Qty</label>:
                        <label className='request-data'>20</label>
                    </div>
                    <div>
                        <label className='request-title'>Location</label>:
                        <label className='request-data'>Location25</label>
                    </div>


                </div>
                <div className='form-group'>
                    <label className='request-title'>Best Before</label>:
                    <label className='request-data'>27/07/2079</label>
                </div>
            </form>
        </div>
    );
}
export default Donations;