import React, {Component} from 'react';
import { Card, Avatar, Switch, Button } from 'antd';
import { KeyOutlined, WindowsOutlined, AlertOutlined } from '@ant-design/icons';
import './App.css';
import lampe from './images/lampe.jpg';
import temperature from './images/temperature.jpg';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

class Setting extends Component{
    render(){
        return(
            <div className="App">
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={temperature} />
                Température
                <div className="onOff">Nuageux</div>
                </Card>
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<AlertOutlined />}/>
                Alert
                <div className="onOff">ON/OFF <Switch size="small" defaultChecked onChange={onChange} /></div>
                <div className="onOff">All lights OFF at : <Button type="primary" shape="round" size="small">01:00</Button></div>
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={lampe} />
                Mouvement ligth
                <div className="onOff">Auto <Switch size="small" defaultChecked onChange={onChange} /></div>
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={lampe} />
                <div className="onOff">ON/OFF <Switch size="small" defaultChecked onChange={onChange} /></div>
                Light
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<KeyOutlined />}/>
                Door System
                <div className="onOff">Open/Close <Switch size="small" defaultChecked onChange={onChange} /></div>
                </Card>
                
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<KeyOutlined />}/>
                Door : Garage
                <div className="onOff">Open/Close <Switch size="small" defaultChecked onChange={onChange} /></div>
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<WindowsOutlined />}/>
                Window
                <div className="onOff">Auto <Switch size="small" defaultChecked onChange={onChange} /></div>
                <div className="onOff">All lights OFF at : <Button type="primary" shape="round" size="small">01:00</Button></div>
                </Card>

            </div>

        );
    }
}

export default Setting;
