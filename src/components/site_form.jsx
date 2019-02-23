import React,{Component, Fragment} from 'react'
import {HouseBtn} from './house_btn'

let $
export default class SiteForm extends Component{

  render_delete = () => {
    if(this.props.site.id){
      return <a data-confirm="Are you sure you want to delete this site?" className="text-white btn btn-danger btn-lg btn-block m-5" rel="nofollow" data-method="delete" href={`/sites/${this.props.site.id}`}>Delete</a>
    }
  }


  componentDidMount(){
    if($){
      $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
    }
  }

  render(){
    if(!this.props.form_is_opened){
      return <div></div>
    }
    return (
      <Fragment>
        <div className="row gap-20 masonry pos-r"></div>
        <div className="masonry-item col-md-12">
          <div className="bgc-white p-20 bd">
            <div className="mT-30">
              <form key={this.props.site.lat} id="site_form" acceptCharset="UTF-8" method="patch">
                <div className="d-flex justify-content-around">
                  <button type='button' className="btn btn-success btn-lg btn-block m-5" onClick={this.props.submit}> Save Customer </button>
                  {this.render_delete()}
                  <button type='button' className='btn btn-secondary btn-lg btn-block m-5' onClick={this.props.close_form}> Close Form </button>
                </div>
                <input name="utf8" type="hidden" value="✓" onChange={this.props.changeForm}/>
                <input type="hidden" name="lat" id="site_lat" value={this.props.site.lat} onChange={this.props.changeForm}/>
                <input type="hidden" name="long" id="site_long" value={this.props.site.lng} onChange={this.props.changeForm}/>
                <div className="form-row">
                  <div className="form-group">
                    <label>Stage</label>
                    <div className='d-flex'>
                      <HouseBtn stage='cb' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='gb' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='appt' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='nh' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='ni' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='rent' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='nq' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='uc' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='cl' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='sol' name="icon_url" changeForm={this.props.changeForm}/>
                      <HouseBtn stage='ins' name="icon_url" changeForm={this.props.changeForm}/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input className="form-control" type="text" name="first_name" id="site_first_name" value={this.props.site.first_name} onChange={this.props.changeForm}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input className="form-control" type="text" name="last_name" id="site_last_name" value={this.props.site.last_name} onChange={this.props.changeForm}/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Full Address</label>
                  <input className="form-control" placeholder={this.props.address_guess} type="text" name="address" id="site_address" value={this.props.site.address} onChange={this.props.changeForm}/>
                </div>
                <div className="form-row">
                  {/*
                  <div className="form-group col-md-12">
                    <label>Email</label>
                    <input name="emails[]" id="site_emails" type="hidden" value={this.props.site.emails} onChange={this.props.changeForm}/>
                    {/*
                    <div className="bootstrap-tagsinput">
                      <MyInput type="text" placeholder="" />
                    </div>
                    <select multiple="true" data-role="tagsinput" name="emails[]" id="site_emails" style={{display: 'none'}}></select>
                  </div> */}
                  <div className="form-group col-md-6">
                    <label>Phone</label>
                    <input className="form-control" type="text" name="phone" id="site_phone" value={this.props.site.phone} onChange={this.props.changeForm}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" id="site_email" value={this.props.site.email} onChange={this.props.changeForm}/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Notes</label>
                  <textarea className="form-control" rows="3" name="notes" id="site_notes" onChange={this.props.changeForm} onClick={this.props.change_selected_input} value={this.props.site.notes} />
                </div>
                {/*
                  <MySelect label="Stage" options={{call_back: 'Call Back', go_back: 'Go Back'}} value='go_back' />
                <div className="form-group">
                  <label>Stage Change</label>
                  <select className="form-control" onChange={this.change_stage} value={this.props.site.stage}>
                      - CB Call Back - phone
                      - GB Go Back - refresh
                      - APPT Appointment set - calendar
                      - NH Not Home - ?
                      - NI Not Interested - X
                      - RENT Renter - X
                      - NQ Not Qualified - X
                      - UC Under Contract - Document
                      - CL Closed Business  - check mark
                      - SOL Sold - sun
                      - INS Installed already - smiley
                    <option value=""></option>
                    <option value="call_back">Call Back</option>
                    <option value="go_back">Go Back</option>
                    <option value="appointment_set">Appointment Set</option>
                    <option value="not_home">Not Home</option>
                    <option value="not_interested">not_interested</option>
                    <option value="renter">Renter</option>
                    <option value="not_qualified">Not Qualified</option>
                    <option value="under_contract">Under Contract</option>
                    <option value="closed_business">closed_business</option>
                    <option value="sold">Sold</option>
                    <option value="installed_already">Installed Already</option>
                  </select>
                </div>*/}
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}