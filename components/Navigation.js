import React, { Component } from "react";
import { Drawer, Button, Layout, Menu, Avatar, Icon } from "antd";
import Link from 'next/link'

const { Header } = Layout;

export default class Navigation extends Component {
  state = {
    isMobile: false,
    mobileMenuOpen: false
  };

  handleResize = () => {
    this.setState({
      isMobile: document.body.clientWidth <= 768
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    setTimeout(this.handleResize, 1000);
  }

  toggleMobileMenuOpen = () => {
    const { isMobile, mobileMenuOpen } = this.state;
    if (!mobileMenuOpen) {
      if (isMobile) {
        this.setState({
          mobileMenuOpen: true
        })
      }
    } else {
      this.setState({
        mobileMenuOpen: false
      })
    }
  }

  renderNavLinks = () => {
    const { isMobile } = this.state;
    const { isAuth } = this.props;

    if (isAuth) {
      return [
        <Menu.Item key={0}><Link href="/dashboard"><a onClick={() => this.toggleMobileMenuOpen()}>Dashboard</a></Link></Menu.Item>,
        <Menu.Item key={1}><Link href="/revenue"><a onClick={() => this.toggleMobileMenuOpen()}>Revenue</a></Link></Menu.Item>,
        <Menu.Item key={2}><Link href="/opportunities"><a onClick={() => this.toggleMobileMenuOpen()}>Opportunities</a></Link></Menu.Item>,
        <Menu.Item key={3}><Link href="/health"><a onClick={() => this.toggleMobileMenuOpen()}>Health</a></Link></Menu.Item>,
        <Menu.Item key={4}><Link href="/keyinsights"><a onClick={() => this.toggleMobileMenuOpen()}>Key Insgihts</a></Link></Menu.Item>,
        <Menu.Item key={5}><Link href="/profiability"><a onClick={() => this.toggleMobileMenuOpen()}>Profiability</a></Link></Menu.Item>,
        <Menu.Item key={6}><Link href="/settings"><a onClick={() => this.toggleMobileMenuOpen()}>Settings</a></Link></Menu.Item>,
        isMobile && <Menu.Item key={100}><Link href="/dashboard"><a onClick={() => { this.toggleMobileMenuOpen() }}>Sign out</a></Link></Menu.Item>
      ];
    } else {
      return (
        <Menu.Item key={3}><a><Button ghost>Sing In</Button></a></Menu.Item>
      )
    }
  }

  renderUserLinks = () => {
    const { isMobile } = this.state;
    return (
      <div>
        {isMobile ?
          <Button onClick={() => this.toggleMobileMenuOpen()} icon="menu" ghost /> :
          <Avatar icon={<Icon type="user" />} />
        }
      </div>
    );
  }

  render() {
    const { isMobile, mobileMenuOpen } = this.state;
    const { isAuth } = this.props;

    return (
      <div>
        <Drawer
          title='Equinauts'
          placement='left'
          closable={false}
          onClose={() => this.toggleMobileMenuOpen()}
          visible={mobileMenuOpen}
        >
          <Menu>{this.renderNavLinks()}</Menu>
        </Drawer>
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <div className="logo" style={{ margin: '0 10px' }}>
              <img src="/logo.svg" alt="Equinauts Logo" height="36px" />
            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              {!isMobile ? this.renderNavLinks() : isAuth ? '' : this.renderNavLinks()}
            </Menu>
          </div>
          {isAuth && this.renderUserLinks()}
        </Header>
      </div>
    );
  }
}
