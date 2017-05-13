import React, { Component } from 'react';

class InputAndTextarea extends Component {
    constructor (props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMultipleSelectChange = this.handleMultipleSelectChange.bind(this);
        this.state = {
            inputValue: '',
            textareaValue: '',
            radioValue: 'male',
            checkboxValue: [],
            selectValue: '',
            multipleSelectValue: []
        };
    }
    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleTextareaChange (e) {
        this.setState({
            textareaValue: e.target.value
        });
    }
    handleRadioChange (e) {
        this.setState({
            radioValue: e.target.value
        });
    }
    handleCheckboxChange (e) {
        const { checked, value } = e.target;
        let checkboxValue = this.state.checkboxValue;
        if(checked && checkboxValue.indexOf(value) === -1){
            checkboxValue.push(value);
        }else{
            checkboxValue = checkboxValue.filter(i => i !== value);
        }
        this.setState({
            checkboxValue
        });
    }
    handleSelectChange (e) {
        this.setState({
            selectValue: e.target.value
        });
    }
    handleMultipleSelectChange (e) {
        const { options } = e.target;
        const multipleSelectValue = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value);
        this.setState({
            multipleSelectValue
        });
    }
    render () {
        const { inputValue, textareaValue, radioValue, checkboxValue, selectValue, multipleSelectValue } = this.state;
        return (
            <div>
                <p>姓名：
                    <input type="text" value={inputValue} onChange={this.handleInputChange} />
                    {inputValue}
                </p>
                <p>自我介绍：
                    <textarea value={textareaValue} onChange={this.handleTextareaChange} />
                    {textareaValue}
                </p>
                <p>性别：
                    <label>男：
                        <input type="radio" value="male" checked={radioValue==='male'} onChange={this.handleRadioChange} />
                    </label>
                    <label>女：
                        <input type="radio" value="female" checked={radioValue==='female'} onChange={this.handleRadioChange} />
                    </label>
                    {radioValue}
                </p>
                <p>爱好：
                    <label>游泳：
                        <input type="checkbox" value="swimming" checked={checkboxValue.indexOf('swimming') !== -1} onChange={this.handleCheckboxChange} />
                    </label>
                    <label>看书：
                        <input type="checkbox" value="reading" checked={checkboxValue.indexOf('reading') !== -1} onChange={this.handleCheckboxChange} />
                    </label>
                    <label>打排球：
                        <input type="checkbox" value="volleyball" checked={checkboxValue.indexOf('volleyball') !== -1} onChange={this.handleCheckboxChange} />
                    </label>
                    {checkboxValue}
                </p>
                <p>出生地：
                    <select value={selectValue} onChange={this.handleSelectChange}>
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                        <option value='dalian'>大连</option>
                    </select>
                    {selectValue}
                </p>
                <p>喜欢的城市
                    <select multiple={true} value={multipleSelectValue} onChange={this.handleMultipleSelectChange}>
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                        <option value='dalian'>大连</option>
                        <option value='chengdu'>成都</option>
                        <option value='wuhan'>武汉</option>
                    </select>
                    {multipleSelectValue}
                </p>
            </div>
        );
    }
}

export default InputAndTextarea;
