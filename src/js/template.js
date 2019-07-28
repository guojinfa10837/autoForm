var wrap = `
              <div class="header">
                 <h5>表单生成器</h5>
              </div>
              <div class="body clearflx">
                  <div class="left">
                     <div class="contentLeft content ">
                        <div class="listItem checkbox">
                           <label>输入框</label>
                           <input type="text">
                        </div>
                        <div class="listItem checkbox">
                           <label>选择框</label>
                           <select>
                              <option>请选择</option>
                           </select>
                        </div>
                        <div class="listItem checkbox">
                               <label>输入域</label>
                               <textarea ztype="textarea"></textarea>
                        </div>
                        <div class="listItem checkbox">
                           <label>输入域</label>
                           <p>
                              <input type="text"/>至<input type="text"/>
                           </p>
                         
                       </div>
                       <div class="listItem checkbox">
                           <label>时间区间</label>
                           <p class="choseItems">
                              <input type="text"/>至<input type="text"/>
                           </p>
                       </div>
                       <div class="listItem checkbox">
                           <label>输入域</label>
                           <p class="choseItems">
                              <input type="text"/>至<input type="text"/>
                           </p>
                        </div>
                     </div>
                     <div class="addListBtn button">新增</div>
                  </div>
                  <div class="right">
                     <ul class="tabs">
                        <li type="1">实列</li>
                        <li type="2">代码</li>
                     </ul>
                     <div class="content contentRight">
                        <div></div>
                     </div>
                  </div>
              </div>
              <div class="footer"></div>
              <div class="mask"></div>
              <div class="messageTip">
                 <h5 class="title">弹层</h5>
                 <div class="messageBody">
                      <ul class="configtab">
                         <li class="action">输入框</li>
                         <li>选择框</li>
                         <li>日期框</li>
                      </ul>
                      <div class="configContent">
                           <ul>
                               <li>
                                   <label>标题</label>
                                   <input type="text" name="label"/>
                               </li>
                               <li>
                                   <label>name</label>
                                   <input type="text" name="name"/>
                               </li>
                               <li>
                                   <label>输入列表(以空格或回车区分)</label>
                                   <textarea name="list"></textarea>
                               </li>
                               <li>
                                   <label>是否是区间时间</label>
                                   <p><label><input type="checkbox">是</label><label><input type="checkbox">否</label></p>
                               </li>
                           </ul>
                      </div>
                      <div class="tools clearflx">
                          <div class="button ok">确定</div>
                          <div class="button cel">取消</div>
                      </div>
                 </div>
              </div>
           `;
let config= '<div></div>';
export default {
    wrap,
    config
    
 } ;        