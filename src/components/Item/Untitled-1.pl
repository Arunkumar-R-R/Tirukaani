<div className='form_element'>
                          <span className='radiolabel'>Silver Form</span>
                          <label className='elements' onClick={()=>getkatch('Bar')}>
                              <input type='radio' value='Bar' name='silverform' /> 
                              <span className='small-text' >Bar</span>
                          </label>
                          <label className='elements' onClick={()=>getkatch('Spatla')} >
                              <input type='radio' value='Spatla' name='silverform'  />
                              <span className='small-text' >Spatla</span>
                          </label>
                          <label className='elements'  onClick={()=>getkatch('Katcha')}>
                              <input type='radio' value='Katcha' name='silverform'  />
                              <span className='small-text'>Katcha</span>
                          </label>
                          <label className='elements' onClick={()=>getkatch('Katti')}>
                              <input type='radio' value='Katti' name='silverform' />
                              <span className='small-text'>Katti</span>
                          </label>
                          <span id="silverTypeError"  className='error'></span>
                        </div>

                        <div >
                          {
                            katchatoggle ? 
                            <>
                            {
                              console.log(inputList)
                            }
                              <Katcha inputList={inputList} handleRemove={handleRemove} setInputList={setInputList} ></Katcha>
                              <Add_katcha Add_katcha onClick={addWeightInput}></Add_katcha>
                            </>
                            :
                            <>
                            <div className='form_element'>
                              <label htmlFor="weight">Weight</label>
                              <input
                                id="weight"
                                name='weight'
                                type="number"
                                required
                              />
                              <span id="weightError"  className='error'></span>
                            </div>
                            <div className='form_element'>
                              <label htmlFor="touch">Touch</label>
                              <input
                                id="touch"
                                name='touch'
                                type="number"
                                maxLength = "100"
                                required
                              />
                              <span id="touchError"  className='error'></span>
                          </div> 
                            </>
                          }
                        </div>
                    